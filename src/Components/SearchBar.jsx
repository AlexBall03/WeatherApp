import axios from "axios";
import React, { useState } from "react";

function SearchBar(props) {
    // State
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    // API Key
    let API_KEY = process.env.REACT_APP_API_KEY;
    // API Call
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    
    // Search Function
    const searchLocation = (e) => {
        if (e.key === 'Enter') {
        e.preventDefault();
        axios.get(URL).then((response) => {
            setData(response.data);
            console.log(response.data)
        })
        setLocation('');
        }
        props.onSubmit(data) 
    }

    return (
        <form className="SearchBar">
            <input 
              value={location}
              onChange={e => setLocation(e.target.value)}
              onKeyPress={searchLocation} 
              type="text" 
              placeholder="Search for a City..." 
            />
        </form>
    );
}

export default SearchBar;