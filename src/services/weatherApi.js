const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city) => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';
  const response = await fetch(
    `${BASE_URL}/weather?q=${city.trim()}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {

    const errorData = await response.json();
    console.error("API Error:", errorData);
    throw new Error(errorData.message || 'City not found');
  }

  return await response.json();
};
export const fetchForecast = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error('Forecast data unavailable');
  return await response.json();
};

export const fetchWeather = async (params) => {
  const { city, lat, lon, units = 'metric' } = params;
  
  let query = city ? `q=${city.trim()}` : `lat=${lat}&lon=${lon}`;
  
  const [weatherRes, forecastRes] = await Promise.all([
    fetch(`${BASE_URL}/weather?${query}&units=${units}&appid=${API_KEY}`),
    fetch(`${BASE_URL}/forecast?${query}&units=${units}&appid=${API_KEY}`)
  ]);

  if (!weatherRes.ok || !forecastRes.ok) throw new Error('Location not found');

  return {
    current: await weatherRes.json(),
    forecast: await forecastRes.json()
  };
};