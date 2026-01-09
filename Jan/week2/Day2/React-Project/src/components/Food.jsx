import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Food() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        fetchFoodDetailsById();
    }, [id]);

    async function fetchFoodDetailsById() {
        try {
            const res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            setDetail(res?.data?.meals?.[0]);
        } catch (error) {
            console.log("Something went wrong");
        }
    }

    if (!detail)
        return (
            <div className="flex justify-center items-center h-screen text-xl">
                This Item details are not available ...
            </div>
        );


    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = detail[`strIngredient${i}`];
        const measure = detail[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    return (

        <div>
            {
              !detail ? (
                <div className="flex justify-center items-center h-screen text-xl">
                This Item details are not available ...
                 </div>
              ):(
                <div className="max-w-6xl mx-auto px-4 py-8">

            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {detail.strMeal}
            </h1>

            <p className="text-gray-600 mb-6">
                <span className="font-semibold">Category:</span> {detail.strCategory} |
                <span className="font-semibold ml-2">Area:</span> {detail.strArea}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <img
                        src={detail.strMealThumb}
                        alt={detail.strMeal}
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Ingredients
                    </h2>

                    <ul className="space-y-2">
                        {ingredients.map((item, index) => (
                            <li
                                key={index}
                                className="bg-gray-100 px-4 py-2 rounded-md text-gray-700"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Instructions
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {detail.strInstructions}
                </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">

                {detail.strSource && (
                    <a
                        href={detail.strSource}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block w-fit bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        View Full Recipe
                    </a>
                )}

                {detail.strYoutube && (
                    <div className="mt-6">
                        <iframe
                            className="w-full rounded-xl shadow-lg"
                            height="420"
                            src={detail.strYoutube.replace("watch?v=", "embed/")}
                            title="YouTube Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
                </div>)  
            }
        </div>
        
    );
}

export default Food;