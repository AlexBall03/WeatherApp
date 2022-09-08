import "./Main.css";

function Main({ data, Location, Temp, highTemp, lowTemp, Desc, Icon }) {
    return (
        data.name != undefined &&
            <main className="Main">
                <div className="container">
                    <section className="location_Section">
                        <h2>{Location}</h2>
                    </section>

                    <section className="temp_Section">
                        <div className="temp_Container">
                            <p>{Temp}</p>
                        </div>

                        <div className="low-temp_Container">
                            <p>{lowTemp}</p>
                        </div>

                        <div className="high-temp_Container">
                            <p>{highTemp}</p>
                        </div>
                    </section>

                    <section className="desc_Section">
                        <p>{Desc}</p>
                    </section>

                    <section className="icon_Section">
                        <img src={Icon} alt="Icon" />
                    </section>
                </div>   
            </main>
    );
}

export default Main;