import "./App.css";
import Search from "./components/search";
import Card from "./components/weather_card";
import { useState } from "react";
import "@fontsource/heebo";

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      <Search setCity={setCity} city = {city} setWeatherData={setWeatherData} ></Search>
      <Card  weatherData ={weatherData} setWeatherData={setWeatherData}></Card>
    </div>
  );
}

export default App;
