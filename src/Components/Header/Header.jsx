import "./Header.css";
import Searchbar from "./Searchbar";

function Header({ Title, searchLocation, location, setLocation }) {
    return (
        <header className="Header">
            <h1>{Title}</h1>
            <Searchbar 
                searchLocation={searchLocation} 
                location={location} 
                setLocation={setLocation} 
            />
        </header>
    );
}

export default Header;