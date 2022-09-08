import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { useState } from "react";
import axios from "axios";

function App() {
  // State
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
   
  // API Key
  const API_KEY = process.env.REACT_APP_API_KEY;
  // API Call
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;

  // Search Function
  const searchLocation = (e) => {
    e.preventDefault();
    axios.get(URL).then((response) => {
      setData(response.data);
      console.log(response.data);
    })
    setLocation('');
  }

  // Info
  const Title = "Local Weather";
  const Location = data.name;
  const Temp = data.main ? data.main.temp.toFixed() + "°F" : null;
  const lowTemp = data.main ? "L: " + data.main.temp_min.toFixed() + "°F" : null;
  const highTemp = data.main ? "H: " + data.main.temp_max.toFixed() + "°F" : null;
  const Desc = data.weather ? data.weather[0].main : null;
  const iconURL = "http://openweathermap.org/img/w/";
  const Icon =  data.weather ? iconURL + data.weather[0].icon + ".png" : null;

  const FeelsLike = data.main ? data.main.feels_like.toFixed() + "°F" : null;
  const Humidity = data.main ? data.main.humidity + "%" : null;
  const Country = data.sys ? data.sys.country : null;
  const Wind = data.wind ? data.wind.speed.toFixed() + " mph" : null;
  const WindDeg = data.wind ? data.wind.deg + "°" : null;
  const Sunrise = data.sys ? data.sys.sunrise : null;
  const convertSunriseTime = new Date(Sunrise * 1000).toLocaleTimeString();
  const Sunset = data.sys ? data.sys.sunset : null;
  const convertSunsetTime = new Date(Sunset * 1000).toLocaleTimeString();
  const Developer = "</Alex-Ball\\>";

  return (
    <div className="App">
      {/* Header Component */}
      <Header 
        Title={Title} 
        searchLocation={searchLocation} 
        location={location} 
        setLocation={setLocation} 
      />

      {/* Main Component */}
      <Main 
        data={data}
        Location={Location} 
        Temp={Temp} 
        highTemp={highTemp} 
        lowTemp={lowTemp} 
        Desc={Desc} 
        Icon={Icon} 
      />

      {/* Footer Component */}
      <Footer 
        data={data}
        FeelsLike={FeelsLike}
        Humidity={Humidity}
        Country={Country}
        Wind={Wind}
        WindDeg={WindDeg}
        convertSunriseTime={convertSunriseTime}
        convertSunsetTime={convertSunsetTime}
        Developer={Developer}
      />
    </div>
  );
}

export default App;
