function Main({ Temp, Desc, Icon }) {
    return (
        <main className="Main">
            <div className="temp_Container">
                <h3>{Temp}</h3>
            </div>

            <div className="desc_Container">
                <p>{Desc}</p>
                <img src={Icon} alt="current weather icon" />
            </div>
        </main>       
    );
}

export default Main;