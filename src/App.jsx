import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  // Info
  const Title = "Local Weather";
  const Location = "Phoenix";
  const Temp = "102°F";
  const lowTemp = "89°F";
  const highTemp = "109°F";
  const Desc = "Sunny";
  const Icon = "Sunny Icon";

  const FeelsLike = "108°F";
  const UV = "0";
  const Humidity = "20%";
  const DewPoint = "60°";
  const Wind = "3 MPH";
  const Gusts = "4 MPH";
  const AirQuality = "46";
  const Visibility = "7 mi";
  const Sunrise = "6:04 PM";
  const Sunset = "6:46 PM";
  const Developer = "</Alex-Ball\\>";

  return (
    <div className="App">
      {/* Header Component */}
      <Header Title={Title} />

      {/* Main Component */}
      <Main 
        Location={Location} 
        Temp={Temp} 
        highTemp={highTemp} 
        lowTemp={lowTemp} 
        Desc={Desc} 
        Icon={Icon} 
      />

      {/* Footer Component */}
      <Footer 
        FeelsLike={FeelsLike}
        UV={UV}
        Humidity={Humidity}
        DewPoint={DewPoint}
        Wind={Wind}
        Gusts={Gusts}
        AirQuality={AirQuality}
        Visibility={Visibility}
        Sunrise={Sunrise}
        Sunset={Sunset}
        Developer={Developer}
      />
    </div>
  );
}

export default App;
