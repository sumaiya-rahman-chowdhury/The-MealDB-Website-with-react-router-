import { useLoaderData } from "react-router-dom";

const About = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20">
            {
                data.meals.map((food,idx)=> <div className=" shadow-lg rounded-lg shadow-black" key={idx}><h1 className="text-center pt-2 text-2xl font-bold">{food.strMeal}</h1>
                <img src={food.strMealThumb} alt="" className="px-16 py-4"/>
               <div className="flex justify-center py-2">
               <button className="  bg-amber-600 text-white px-4 py-2 rounded">Deatails</button>
               </div>
                </div>)
            }
        </div>
    );
};

export default About;