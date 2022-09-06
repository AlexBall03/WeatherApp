function Main({ Temp, Desc, FeelsLike }) {
    return (
        <main className="Main">
            <div className="temp_Container">
                <h3>{Temp}</h3>
            </div>

            <div className="desc_Container">
                <p>{Desc}</p>
            </div>
        </main>       
    );
}

export default Main;