import axios from "axios";

const api = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    lang: "en",
    key: "332442c812eb4b11b46111409250309", // your API key
  },
});

// Fetch current weather
export const FetchWeather = async (city) => {
  try {
    const response = await api.get("/current.json", {
      params: { q: city },
    });
    return response.data;
  } catch (e) {
    console.error("Error fetching current weather:", e);
    throw e;
  }
};

// Fetch forecast weather
export const fetchForcastWeather = async (city, days) => {
  try {
    const response = await api.get("/forecast.json", {
      params: {
        q: city,
        days: days,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      return `Error fetching API: ${response.status}`;
    }
  } catch (e) {
    console.error("Error fetching forecast:", e);
    throw e;
  }
};
