import { useState, useEffect } from "react";
import { styled } from "@mui/system";

const Form = styled("form")({
  display: "flex",
  gap: "1rem",
  backgroundColor: "#f0e130",
  padding: "1rem",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  animation: "ColorPulse 5s ease infinite",
  '@keyframes ColorPulse': {
    '0%': {backgroundColor: '#f0e130'},
    '50%': {backgroundColor: '#f39c12'},
    '100%': {backgroundColor: '#f0e130'}
  },
});

const Input = styled("input")({
  padding: "0.5rem",
  border: "none",
  borderRadius: "4px",
  boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  backgroundColor: "#ffcccb",
  color: "#000",
  fontWeight: "bold",
  fontSize: "1.2rem",
  transition: "all 0.3s ease",
  ':hover': {
    backgroundColor: "#ffa07a",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },
});

const Button = styled("button")({
  padding: "0.6rem",
  backgroundColor: "#32cd32",
  color: "white",
  border: "none",
  borderRadius: "3.125rem",
  cursor: "pointer",
  boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
  fontSize: "1.2rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  transition: "all 0.3s ease",
  ':hover': {
    backgroundColor: "#228b22",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
  },
});

const WeatherContainer = styled("div")({
  marginTop: "2rem",
  padding: "1.5rem 2.5rem",
  overflow: "hidden",
  position: "relative",
  borderRadius: "0.625rem",
  fontFamily: "Roboto, sans-serif",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  background: "linear-gradient(270deg, #12c2e9, #c471ed, #f64f59)",
  backgroundSize: "600% 600%",
  animation: "Gradient 20s ease infinite",
  "@keyframes Gradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
});

const Ripple = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "200%",
  height: "200%",
  background:
    "radial-gradient(circle at center, transparent, #12c2e9, #c471ed, #f64f59)",
  animation: "Ripple 20s ease infinite",
  opacity: 0.5,
  transform: "translate(-50%, -50%)",
  borderRadius: "50%",
  "@keyframes Ripple": {
    "0%": { transform: "translate(-50%, -50%) scale(0)" },
    "100%": { transform: "translate(-50%, -50%) scale(1)" },
  },
});

const WeatherHeading = styled("h2")({
  fontSize: "2.5rem",
  marginBottom: "2rem",
  marginTop: "0.5rem",
  textAlign: "center",
  color: "#ffffff",
  fontWeight: "bold",
  textShadow: "2px 2px 4px #000000",
  animation: "ColorChange 3s infinite",
  position: "relative",
  zIndex: "5",
});

const TempInfo = styled("p")({
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
  color: "#ff5722",
  textShadow: "1px 1px 2px #000000",
  fontFamily: "'Roboto Mono', monospace",
});

const PressureInfo = styled("p")({
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
  color: "#3f51b5",
  textShadow: "1px 1px 2px #000000",
  fontFamily: "'Roboto Mono', monospace",
});

const WeatherDescInfo = styled("p")({
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
  color: "#9c27b0",
  textShadow: "1px 1px 2px #000000",
  fontFamily: "'Roboto Mono', monospace",
});

const OtherInfo = styled("p")({
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
  color: "#009688",
  textShadow: "1px 1px 2px #000000",
  fontFamily: "'Roboto Mono', monospace",
});

const Container3D = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "50%",
  background: "linear-gradient(145deg, #e3f2fd, #bbdefb)",
  width: "15.625rem",
  height: "15.625rem",
  overflow: "hidden",
  padding: "0",
  margin: "0",
  transition: "all 0.5s ease-in-out",
  boxShadow: "0 0 30px #bbdefb",
  "&:hover": {
    borderRadius: "0.9375rem",
    boxShadow:
      "5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(225,245,254,0.7)",
  },
});

const Title = styled("h2")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#ffffff",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "42%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "linear-gradient(to right, #f64f59, #c471ed, #12c2e9)",
  backgroundSize: "600% 600%",
  animation: "Gradient 6s ease infinite, ColorChange 4s infinite",
  opacity: "1",
  transition: "all 0.5s ease-in-out",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textShadow: "2px 2px 4px #000000",
  "&:hover": {
    opacity: "0",
  },
  "@keyframes Gradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
  "@keyframes ColorChange": {
    "0%": { color: "#ffffff" },
    "50%": { color: "#c471ed" },
    "100%": { color: "#ffffff" },
  },
});

const InfoContainer = styled(Container3D)({
  position: "relative",
  gap: "0.5rem",
});

const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  gap: "2rem",
  justifyItems: "center",
  alignItems: "center",
});

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
