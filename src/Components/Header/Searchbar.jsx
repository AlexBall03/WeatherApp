import "./Searchbar.css";

function Searchbar() {
    return (
        <form className="Searchbar">
            <div className="container">
                <input type="text" name="searchbar" placeholder="Type city name here..." />
                <button type="submit">Search</button>
            </div>
        </form>
    );
}

export default Searchbar;