export default function SavedRecipes({ savedRecipes }) {
    

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
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg  flex flex-col transition transform hover:scale-105 duration-300"
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
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        <strong>Ingredients:</strong>{" "}
                                        {recipe.ingredients.join(", ")}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
