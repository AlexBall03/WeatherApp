import './App.css';
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  // Info
  const Title = "Local Weather";
  const Location = "Phoenix";
  const Temp = "102°F";
  const Desc = "Sunny";
  const Icon = "Sunny Icon";
  const minTemp = "90°F";
  const maxTemp = "105°F";
  const FeelsLike = "108°F";
  const Humidity = "20%";
  const DewPoint = "60°";
  const WindSpeed = "3 MPH";
  const WindGusts = "4 MPH";
  
  return (
    <div className="App">
      <section className="header_Section">
        <Header 
          Title={Title} 
          Location={Location} 
        />
      </section>

      <section className="searchbar_Section">
        <SearchBar />
      </section>

      <section className="main_Section">
       <Main 
        Temp={Temp} 
        Desc={Desc}
        Icon={Icon} 
      />
      </section>

      <section className="footer_Section">
        <Footer 
          minTemp={minTemp} 
          maxTemp={maxTemp} 
          FeelsLike={FeelsLike} 
          Humidity={Humidity} 
          DewPoint={DewPoint} 
          WindSpeed={WindSpeed} 
          WindGusts={WindGusts} 
        />
      </section>
    </div>
  );
}

export default App;
