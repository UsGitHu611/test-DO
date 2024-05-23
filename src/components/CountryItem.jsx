import { NavLink } from "react-router-dom";
import { getCurrentCountry } from "../services/getCurrentCountry";
import { useEffect, useState } from "react";
const CountryItem = ({ flag, name, population }) => {
    
    const [curr, setCurr] = useState({});
    const [error, setError] = useState("");
    let populationFormat = new Intl.NumberFormat("ru");

    useEffect(() => {
        getCurrentCountry(name.common.toLowerCase()).then(d => {
            console.log(d);
            setCurr({ ...d[0] })
        }).catch(err => {
            setError("Возможно что то пошло не так... проверьте введенные данные или повторите попытку позже")
        })
    }, [])
    console.log(error);
    return (
        <li className='flex rounded-[3px] flex-col justify-between p-4 max-w-[250px]
         min-h-[320px] transition shadow duration-500 hover:shadow-xl bg-slate-100'>
            <h1 className='text-center text-[21px]'>{name.common}</h1>

            <div className='flex justify-center flex-col items-center gap-2 text-[12px]'>
                <img className='max-h-[110px]' src={flag.svg} alt={flag.alt} />
                <span>Население: {populationFormat.format(population)} человек</span>
            </div>

            <NavLink state={{ curr }} to={`${name.common}`}>Подробнее</NavLink>
        </li>
    );
}


export { CountryItem };
