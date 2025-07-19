import { useState, useEffect } from "react";

const API_KEY = "b756d5f24c85447cb19d23fec8570592"; 

export function useRecipeSuggest(query) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;

        const fetchRecipes = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(query)}&number=6&apiKey=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setRecipes(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [query]);

    return { recipes, loading, error };
}
