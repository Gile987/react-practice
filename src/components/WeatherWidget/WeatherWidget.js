import { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  WeatherContainer,
  Ripple,
  WeatherHeading,
  TempInfo,
  PressureInfo,
  WeatherDescInfo,
  OtherInfo,
  Title,
  InfoContainer,
  GridContainer,
} from "./WeatherWidgetStyles";

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
    setWeatherData(null);
    event.preventDefault();
    const inputValue = event.target.elements.location.value;
    if (inputValue !== inputLocation) {
      setInputLocation(inputValue);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="location" placeholder="Enter location" />
        <Button type="submit">Get Weather</Button>
      </Form>
      {loading && <TempInfo>Loading...</TempInfo>}
      {error && <TempInfo>{error}</TempInfo>}
      {weatherData ? (
        <WeatherContainer>
          <WeatherHeading>
            Weather in {inputLocation.toUpperCase()}
          </WeatherHeading>
          <Ripple />
          <Ripple style={{ animationDelay: "10s" }} />
          <GridContainer>
            <InfoContainer>
              <Title>Temperature</Title>
              <TempInfo>Current: {weatherData.main.temp}°C</TempInfo>
              <TempInfo>Feels Like: {weatherData.main.feels_like}°C</TempInfo>
              <TempInfo>Min: {weatherData.main.temp_min}°C</TempInfo>
              <TempInfo>Max: {weatherData.main.temp_max}°C</TempInfo>
            </InfoContainer>
            <InfoContainer>
              <Title>Pressure & Humidity</Title>
              <PressureInfo>
                Pressure: {weatherData.main.pressure} hPa
              </PressureInfo>
              <PressureInfo>
                Humidity: {weatherData.main.humidity}%
              </PressureInfo>
            </InfoContainer>
            <InfoContainer>
              <Title>Weather</Title>
              <WeatherDescInfo>
                {weatherData.weather[0].main} (
                {weatherData.weather[0].description})
              </WeatherDescInfo>
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  weatherData.weather[0].icon +
                  ".png"
                }
                alt="Weather icon"
              />
            </InfoContainer>
            <InfoContainer>
              <Title>Other Information</Title>
              <OtherInfo>Wind Speed: {weatherData.wind.speed} m/s</OtherInfo>
              <OtherInfo>Cloudiness: {weatherData.clouds.all}%</OtherInfo>
            </InfoContainer>
          </GridContainer>
        </WeatherContainer>
      ) : null}
    </div>
  );
};

export default WeatherWidget;
