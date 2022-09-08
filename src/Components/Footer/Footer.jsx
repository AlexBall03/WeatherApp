import "./Footer.css";

function Footer({ data, FeelsLike, Humidity, Country, Wind, convertSunriseTime, convertSunsetTime, Developer }) {
    return (
        data.name != undefined &&
            <footer className="Footer">
                <div className="footer_Container">
                    <section className="heading_Section">
                        <h2>Other Data</h2>
                    </section>

                    {/* Feels Like Section */}
                    <section className="feels-like_Section section">
                        <p>Feels Like: {FeelsLike}</p>
                    </section>

                    {/* Humidity Section */}
                    <section className="humidity_Section section">
                        <p>Humidity: <br /> {Humidity}</p>
                    </section>

                    {/* Country Section */}
                    <section className="country_Section section">
                        <p>Country: <br /> {Country}</p>
                    </section>

                    {/* Wind Section */}
                    <section className="wind_Section section">
                        <p>Wind: {Wind}</p>
                    </section>

                    {/* Sunrise Section */}
                    <section className="sunrise_Section section">
                        <p>Sunrise: <br /> {convertSunriseTime}</p>
                    </section>

                    {/* Sunset Section */}
                    <section className="sunset_Section section">
                        <p>Sunset: <br /> {convertSunsetTime}</p>
                    </section>

                    <section className="developer_Section">
                        <p>Developer: {Developer}</p>
                    </section>
                </div>
            </footer>
    );
}

export default Footer;