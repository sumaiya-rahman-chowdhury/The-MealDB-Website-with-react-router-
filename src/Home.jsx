import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    const data = useLoaderData() ;
    
    return (
        <div>
          <Navbar></Navbar>
          <div>
          {
                data.meals.map((food,idx)=> <div className=" shadow-lg rounded-lg shadow-black" key={idx}><h1 className="text-center pt-2 text-2xl font-bold">{food.strMeal}</h1>
               <div className=' flex justify-center'>
               <img src={food.strMealThumb} alt="" className="px-16 py-4"/>
               </div>
               <div className="flex justify-center py-2">
               {/* <Link to={`/foods/${food.idMeal}`}><button className="  bg-amber-600 text-white px-4 py-2 rounded">Deatails</button></Link> */}
               </div>
                </div>)
            }
          </div>
          <Outlet></Outlet>
          
        </div>
    );
};

export default Home;