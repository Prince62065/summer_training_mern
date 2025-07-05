import { useState } from "react";
import useWeatherData from "../hooks/useWeatherData";

export default function Home() {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const { data, error } = useWeatherData(selectedCity);
  const icon = data?.weather?.[0]?.icon;
  const description = data?.weather?.[0]?.description;
  const temperature = data?.main?.temp;
  const pressure = data?.main?.pressure;
  const humidity = data?.main?.humidity;
  const feels_like = data?.main?.feels_like;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setSelectedCity(city.trim());
    setCity("");
  };

  return (
    <>
      <div className="bg-gradient-to-tr from-sky-500 to-indigo-600 min-h-screen flex flex-col justify-center items-center px-10 ">
        <div className=" bg-white max-w-2xl w-full opacity-85 px-5 py-5 rounded-lg shadow-lg">
          <div>
            <form action="" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Enter City Name"
                className="px-5 py-2 w-full rounded-xl border "
                value={city}
                onChange={(e) => {
                  const value = e.target.value;
                  const capitalized =
                    value.charAt(0).toUpperCase() +
                    value.slice(1).toLowerCase();
                  setCity(capitalized);
                }}
                required
              />
              <button className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-lg w-full cursor-pointer hover:bg-blue-800">
                Search
              </button>
            </form>
          </div>
          <div>
            {data ? (
              <>
                <div className="text-center mt-10 bg-gradient-to-tl from-sky-400 to-indigo-400 rounded-md">
                  <h2 className="text-6xl font-semibold ">{data.name}</h2>
                  <p className="text-lg font-bold mt-5">{temperature}°C</p>
                  <p className="capitalize font-semibold">{description}</p>
                  {icon && (
                    <img
                      src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                      alt="weather icon"
                      className="mx-auto "
                    />
                  )}
                  <p className="text-md font-semibold">
                    Feels Like: {feels_like}°C
                  </p>
                </div>
                <div className="flex justify-between items-center mt-2 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-md px-5 py-5 text-md font-semibold">
                  <span>Pressure : {pressure} hPa</span>
                  <span>Humidity : {humidity}%</span>
                </div>
              </>
            ) : (
              <div className="mt-5 px-5 ">
                <p className="text-center text-4xl uppercase break-words">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
