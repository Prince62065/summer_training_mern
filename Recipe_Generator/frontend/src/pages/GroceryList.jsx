export default function GroceryList({ savedRecipes }) {
    // Collect and merge all ingredients from saved recipes
    const ingredients = savedRecipes.flatMap(recipe => recipe.ingredients);

    // Remove duplicates
    const uniqueIngredients = [...new Set(ingredients)];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-gray-100 dark:bg-gray-900 bg-cover bg-no-repeat bg-fixed"  style={{
            backgroundImage: `url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg')`,
        }} >
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-10 transition-all duration-300">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
                    Grocery List
                </h2>

                {uniqueIngredients.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
                        No ingredients found. Save some recipes first!
                    </p>
                ) : (
                    <ul className="list-disc pl-5 text-lg md:text-xl text-gray-700 dark:text-gray-300 space-y-2">
                        {uniqueIngredients.map((item, index) => (
                            <li key={index} className="capitalize list-none border-2 py-1 rounded-md px-2"><strong>=&gt;</strong>  {item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
