import React, { useEffect, useState } from "react";
import { fetchForcastWeather, FetchWeather } from "./weather";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        const data = await FetchWeather("kabul");
        setWeather(data);
      } catch (e) {
        console.log(e);
      }
    };

    const loadWeatherForecast = async () => {
      try {
        const data = await fetchForcastWeather("herat", 4);
        setForecast(data);
      } catch (e) {
        console.error(e);
      }
    };

    loadWeatherForecast();
    loadWeatherData();
  }, []);

  return (
    <>
      {/* Current weather */}


      <div className="bg-blue-700 absolute h-[190px] p-5 w-[200px] m-[300px] my-[70px] rounded-2xl text-amber-50">

        {weather && (
          <div>
            <p className="font-bold"> Today</p>
            <div className="ml-[50px]">
              <img src={weather.current.condition.icon} alt="icon" />
            </div>
            <p className="font-bold">{weather.location.name}</p>

            <p>{weather.current.temp_c}°C</p>
          </div>
        )}
      </div>


      <div
        className="bg-[url('src/images/kab.jpg')] bg-cover bg-center h-[400px] w-full flex pl-10 p-20 gap-5 text-white"
      >
        <h1 className="text-2xl font-bold">Kabul Forecast</h1>
      </div>



      {/* Forecast */}
      <div className="bg-[url('src/images/herat1.jpg')] flex pl-10 p-20 gap-5 text-white my-[10px]">
        <h1 className="text-2xl font-bold">Herat Forecast</h1>


        {forecast &&
          forecast.forecast.forecastday.map((day, index) => (
            <div
              key={index}
              className="bg-blue-600 w-[200px] p-4 rounded-xl shadow-lg"
            >
              <p className="font-bold">{day.date}</p>
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                className="mx-auto"
              />
              <p>{day.day.condition.text}</p>
              <p>Max: {day.day.maxtemp_c}°C</p>
              <p>Min: {day.day.mintemp_c}°C</p>
            </div>
          ))}
      </div>
    </>
  );
}
