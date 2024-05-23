import mapIcon from "../assets/images/world.svg";
const ErrorHandler = ({ textError }) => {
    return (
        <div className='flex flex-col items-center gap-5'>
            <h1 className='font-semibold text-[25px] w-[450px] text-center'> { textError } </h1>
            <img className='max-w-6xl' src={mapIcon} alt="map-icon" />
        </div>
    );
}

export default ErrorHandler;
