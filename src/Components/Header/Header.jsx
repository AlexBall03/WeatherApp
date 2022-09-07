import "./Header.css";
import Searchbar from "./Searchbar";

function Header({ Title }) {
    return (
        <header className="Header">
            <h1>{Title}</h1>
            <Searchbar />
        </header>
    );
}

export default Header;