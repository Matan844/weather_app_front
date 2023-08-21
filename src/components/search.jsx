import '../style/search.css';
import axios from "axios";
export default function Search(props) {
  const setCity = props.setCity;
  const city = props.city;
  const setWeatherData = props.setWeatherData;

  const fetchData = async () => {
    setCity('')
    if (city !== '') {
    try {
      const response = await axios.get(`http://localhost:5000/api/data`, {
        params: {
          city: city,
        },
      });
      setWeatherData(response.data);
      setCity('')
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
      alert("city not found");
    }}
    else{
      alert("Please enter a city name");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchData()
    }
  };

  return (
    <div className="leftside">
      <p className="maintext">
        Use our weather app to see the weather around the world{" "}
      </p>
      <div className="container">
        <p className="cityname">City name</p>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyPress}
            value={city}
          />
          <button onClick={fetchData}>Check</button>
        </div>
      </div>
    </div>
  );
}
