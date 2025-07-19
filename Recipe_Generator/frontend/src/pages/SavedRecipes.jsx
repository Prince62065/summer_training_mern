import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function SavedRecipes({ savedRecipes }) {
    const [ratings, setRatings] = useState(
        savedRecipes.reduce((acc, recipe, index) => {
            acc[index] = recipe.rating || 0; 
            return acc;
        }, {})
    );

    const handleRating = (index, newRating) => {
        setRatings((prev) => ({ ...prev, [index]: newRating }));

        // Optional: If you want to send the rating to backend, call API here.
        // Example:
        // axios.post('/api/recipes/rate', { id: recipe._id, rating: newRating })
    };

    return (
        <div
            className="min-h-screen flex justify-center items-start bg-cover bg-no-repeat bg-fixed px-5 py-10 dark:bg-gray-900"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg')`,
            }}
        >
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl font-bold mb-8 mt-10 text-center text-white dark:text-gray-200">
                    Saved Recipes
                </h2>

                {savedRecipes.length === 0 ? (
                    <p className="text-gray-200 text-center dark:text-gray-400">
                        No saved recipes yet.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {savedRecipes.map((recipe, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col transition transform hover:scale-105 duration-300"
                            >
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-52 object-cover px-2 py-2 rounded-md"
                                />
                                <div className="p-4 flex flex-col justify-between flex-1">
                                    <h3 className="text-lg font-semibold uppercase text-gray-800 dark:text-gray-100 mb-2">
                                        {recipe.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                        <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
                                    </p>

                                    <div className="flex items-center gap-1">
                                        {Array(5)
                                            .fill(0)
                                            .map((_, starIndex) => (
                                                <FaStar
                                                    key={starIndex}
                                                    size={20}
                                                    onClick={() => handleRating(index, starIndex + 1)}
                                                    className={`cursor-pointer transition-colors ${
                                                        starIndex < ratings[index]
                                                            ? "text-yellow-400"
                                                            : "text-gray-400 dark:text-gray-500"
                                                    }`}
                                                />
                                            ))}
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">
                                            {ratings[index]} / 5
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
