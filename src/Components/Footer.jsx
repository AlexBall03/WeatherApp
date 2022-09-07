function Footer({ minTemp, maxTemp, FeelsLike, Humidity, DewPoint, WindSpeed, WindGusts }) {
    return (
        <footer className="Footer">
            <div className="min-temp_Container container">
                <p>Low: <br /> {minTemp}</p>
            </div>

            <div className="max-temp_Container container">
                <p>High: <br /> {maxTemp}</p>
            </div>

            <div className="feels-like_Container container">
                <p>FeelsLike: <br /> {FeelsLike}</p>
            </div>

            <div className="humidity_Container container">
                <p>Humidity: <br /> {Humidity}</p>
            </div>

            <div className="dew-point_Container container">
                <p>DewPoint: <br /> {DewPoint}</p>
            </div>

            <div className="wind-speed_Container container">
                <p>WindSpeed: <br /> {WindSpeed}</p>
            </div>

            <div className="wind-gusts_Container container">
                <p>Gusts: <br /> {WindGusts}</p>
            </div>
        </footer>
    );
}

export default Footer;