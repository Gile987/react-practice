import { useState, useEffect } from "react";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputLocation, setInputLocation] = useState("");
  const [error, setError] = useState("");
  console.log("WeatherWidget rendered");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=${apiKey}&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          setError("");
        } else {
          setError("Failed to fetch weather data");
        }
      } catch (error) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    if (inputLocation !== "") {
      fetchWeatherData();
    }
  }, [inputLocation]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.location.value;
    if (inputValue !== inputLocation) {
      setInputLocation(inputValue);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
        />
        <button type="submit">Get Weather</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {weatherData ? (
        <div>
          <h2>Weather in {inputLocation}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].main}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherWidget;
