import "./Main.css";

function Main({ Location, Temp, highTemp, lowTemp, Desc, Icon }) {
    return (
        <main className="Main">
            <div className="container">
                {/* City */}
                <section className="location_Section">
                    <h2>{Location}</h2>
                </section>

                {/* Tempurature */}
                <section className="temp_Section">
                    <div className="temp_Container">
                        <p>{Temp}</p>
                    </div>

                    {/* Low */}
                    <div className="low-temp_Container">
                        <p>L: {lowTemp}</p>
                    </div>

                    {/* High */}
                    <div className="high-temp_Container">
                        <p>H: {highTemp}</p>
                    </div>
                </section>

                {/* Description */}
                <section className="desc_Section">
                    <p>{Desc}</p>
                </section>

                {/* Weather Icon */}
                <section className="icon_Section">
                    <img src={Icon} alt="Weather Icon" />
                </section>
            </div>
        </main>
    );
}

export default Main;