import { useLoaderData } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div className="mt-10">
          <div className=" lg:flex items-center justify-center">
            <div className="">
                <img src={details.meals[0].strMealThumb} alt="" className=" px-9 w-[500px] " />
            </div>
            <div className="w-[400px]  space-y-2">
                <h2 className=" text-xl font-bold text-center">{details.meals[0].strMeal}</h2>
                <h3 className=" lg:text-justify text-center"><span className=" underline">Instructions </span>: {details.meals[0].strInstructions}</h3>

            </div>
          </div>
        </div>
    );
};

export default Details;