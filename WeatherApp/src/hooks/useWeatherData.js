import { useEffect, useState } from "react";

const useWeatherData = (city) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  // weather api key
  const YOUR_API_KEY = "";

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}&units=metric`;
        const res = await fetch(url);
        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Failed to fetch weather data");
        }

        setData(result);
        setError("");
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, error };
};

export default useWeatherData;
