import "./Searchbar.css";

function Searchbar({ searchLocation, location, setLocation }) {
    return (
        <form onSubmit={searchLocation} className="Searchbar">
            <div className="container">
                <input 
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    type="text" 
                    name="searchbar" 
                    placeholder="Type city name here..." />
                <button type="submit">Search</button>
            </div>
        </form>
    );
}

export default Searchbar;