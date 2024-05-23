import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { getAllCountry } from "../services/getAllCountry";
import { CountryItem } from "./CountryItem";
import ErrorHandler from "./ErrorHandler";

const CountryList = () => {
    const [country, setCountry] = useState([]);
    const [limit, setLimit] = useState(10);
    const [error, setError] = useState(null);

    const scrollHandler = () => {
        if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
            setLimit(prev => prev + 10)
        }
    }

    useEffect(() => {
        getAllCountry().then((data) => {
            setCountry([...data.slice(0, limit)])
        }).catch(error => {
            setError(`Что-то пошло не так... 😭Проверьте данные ввода или повторите позже! 🕸🖥️`)
        })
    }, [limit])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return () => document.removeEventListener("scroll", scrollHandler)
    }, [])

    return (
        <>
            {error ? <ErrorHandler textError={error} /> : (
                <ul className='grid grid-cols-5 gap-4'>
                    {country.map(({ name, flags, population, cca2 }) => (
                        <CountryItem key={uuidv4()}
                            flag={flags}
                            name={name}
                            cca2={cca2}
                            population={population} />
                    ))}
                </ul>
            )}
        </>
    );
}

export default CountryList;
