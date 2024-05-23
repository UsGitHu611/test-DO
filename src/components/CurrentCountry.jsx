import { useLocation } from "react-router-dom";

const CurrentCountry = () => {
    const { state } = useLocation();
    const {
        flags, name,
        capital, currencies,
        population, timezones,
        tld, coatOfArms, maps
    } = state.curr;
    const currenciesKeys = Object.keys(currencies);
    const { name: currenciesName, symbol } = currencies[currenciesKeys[0]];
    const populationFormat = Intl.NumberFormat("ru");

    return (
        <div className='max-w-2xl px-6 py-4 bg-slate-100 rounded-md flex flex-col'>
            <div className='flex gap-2 flex-col'>

                <img src={flags.svg} alt="flag" />
                <div className='flex flex-col gap-[2px]'>
                    <h1 className='font-normal text-[30px]'>
                        {'Название страны: '}
                        <span className='font-medium'>{name.official}</span>
                    </h1>
                    <p className='text-[20px]'>
                        {'Столица: '}
                        <span className='font-medium'>{capital}</span>
                    </p>

                    <p>
                        <span className='text-[20px] flex items-center gap-3'>
                            Герб:
                            <img className='w-10' src={coatOfArms.png} alt="coatOfArms" />
                        </span>
                    </p>
                </div>

                <div className='flex gap-2 text-[15px]'>
                    <span>Имя валюты: {currenciesName}</span>
                    <span>Знак валюты: {symbol}</span>
                    <span>Население страны: {populationFormat.format(population) + 'ч'}</span>
                </div>

                <p className='font-medium'>
                    {`Часовой пояс: ${timezones[0]}`}
                </p>

                <p className='font-medium'>
                    {`Домен: ${tld[0]}`}
                </p>

            </div>
            <a className='bg-black text-white max-w-40 py-2 rounded-md 
                transition-colors duration-300 hover:bg-yellow-300 hover:text-black 
                justify-end px-2 ml-auto cursor-pointer' href={maps.googleMaps} target="_blank">
                Показать на карте
            </a>
        </div>
    )
}

export default CurrentCountry;
