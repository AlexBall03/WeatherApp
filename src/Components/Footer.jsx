function Footer({ minTemp, maxTemp, FeelsLike, Humidity, DewPoint, WindSpeed, WindGusts }) {
    return (
        <footer className="Footer">
            <div className="min-temp_Container">
                <h3>Low: {minTemp}</h3>
            </div>

            <div className="max-temp_Container">
                <p>High: {maxTemp}</p>
            </div>

            <div className="feels-like_Container">
                <p>Feels Like: {FeelsLike}</p>
            </div>

            <div className="humidity_Container">
                <p>Humidity: {Humidity}</p>
            </div>

            <div className="dew-point_Container">
                <p>Dew Point: {DewPoint}</p>
            </div>

            <div className="wind-speed_Container">
                <p>Wind Speed:{WindSpeed}</p>
            </div>

            <div className="wind-gusts_Container">
                <p>Gusts: {WindGusts}</p>
            </div>
        </footer>
    );
}

export default Footer;