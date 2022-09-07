import "./Footer.css";

function Footer({ FeelsLike, UV, Humidity, DewPoint, Wind, Gusts, AirQuality, Visibility, Sunrise, Sunset, Developer }) {
    return (
        <footer className="Footer">
            <div className="footer_Container">
                <section className="heading_Section">
                    <h2>Other Data</h2>
                </section>

                {/* Feels Like Section */}
                <section className="feels-like_Section section">
                    <p>Feels Like: <br /> {FeelsLike}</p>
                </section>

                {/* UV Section */}
                <section className="uv_Section section">
                    <p>UV Index: <br /> {UV}</p>
                </section>

                {/* Humidity Section */}
                <section className="humidity_Section section">
                    <p>Humidity: <br /> {Humidity}</p>
                </section>

                {/* DewPoint Section */}
                <section className="dew-point_Section section">
                    <p>Dew Point: <br /> {DewPoint}</p>
                </section>

                {/* Wind Section */}
                <section className="wind_Section section">
                    <p>Wind: <br /> {Wind}</p>
                </section>

                {/* Gusts Section */}
                <section className="gusts_Section section">
                    <p>Gusts: <br /> {Gusts}</p>
                </section>

                {/* AirQuality Section */}
                <section className="air-quality_Section section">
                    <p>Air Quality: <br /> {AirQuality}</p>
                </section>

                {/* Visibility Section */}
                <section className="visibility_Section section">
                    <p>Visibility: <br /> {Visibility}</p>
                </section>

                {/* Sunrise Section */}
                <section className="sunrise_Section section">
                    <p>Sunrise: <br /> {Sunrise}</p>
                </section>

                {/* Sunset Section */}
                <section className="sunset_Section section">
                    <p>Sunset: <br /> {Sunset}</p>
                </section>

                <section className="developer_Section">
                    <p>Developer: {Developer}</p>
                </section>
            </div>
        </footer>
    );
}

export default Footer;