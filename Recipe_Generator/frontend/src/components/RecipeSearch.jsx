import { useEffect, useState } from "react";
import { useRecipeSuggest } from "../hooks/useRecipeSuggest";

export default function RecipeSearch({ queryList, onSave }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const joinedQuery = queryList.join(",");
    setQuery(joinedQuery);
  }, [queryList]);

  const { recipes, loading, error } = useRecipeSuggest(query);

  return (
    <div className="p-5 ">
      {loading && (
        <p className="text-2xl text-center text-gray-800 dark:text-gray-200">
          Loading recipes...
        </p>
      )}
      {error && (
        <p className="text-2xl text-center text-red-500">Error: {error}</p>
      )}

      {!loading && !error && recipes.length === 0 && (
        <p className="text-2xl text-center text-gray-800 dark:text-gray-300 font-semibold">
          No Recipes Found for the given ingredients.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 ">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between transition-transform hover:scale-105 duration-300 w-full sm:w-80 md:w-96"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover border-b dark:border-gray-700 p-2"
            />
            <div className="p-4 flex flex-col flex-1 justify-between">
              <h2 className="text-lg font-semibold uppercase text-gray-800 dark:text-gray-100 mb-3">
                {recipe.title}
              </h2>
              <button
                onClick={() => {
                  onSave(recipe);
                  window.alert("Recipe Saved successfully.");
                }}
                className="mt-auto px-5 py-2 bg-slate-700 text-white rounded-md font-semibold hover:bg-slate-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
