import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className='text-lg font-bold'>
      <NavLink className='border border-slate-950 rounded-md py-2 
      px-3 hover:bg-black hover:text-white transition-colors duration-500' to={'/country'}>
        Показать список стран
      </NavLink>
    </div>
  );
}

export default Home;

