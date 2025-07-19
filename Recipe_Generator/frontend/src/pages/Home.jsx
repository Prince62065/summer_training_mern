import { useState } from "react";
import AddButton from "../components/AddButton";
import RecipeSearch from "../components/RecipeSearch";

export default function Home({ saveRecipes }) {
  const [queryList, setQueryList] = useState([]);

  const addQuery = (ingredients) => {
    setQueryList(ingredients);
  };

  const handleSave = (recipe) => {
    saveRecipes(recipe, queryList);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center py-5 px-10 bg-cover bg-no-repeat bg-fixed dark:bg-gray-900 dark:text-gray-100"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg')`,
      }}
    >
      <div className="bg-white dark:bg-gray-800 w-full max-w-2xl mx-auto px-5 md:px-10 py-5 rounded-lg mt-12 md:mt-24 shadow-md transition-all duration-300">
        <h1 className="text-3xl md:text-5xl font-bold italic text-amber-500 dark:text-gray-300 text-center mb-5">
          Recipe Generator
        </h1>

        <AddButton addQuery={addQuery} />
      </div>

      <div>
        <RecipeSearch queryList={queryList} onSave={handleSave} />
      </div>
    </div>
  );
}
