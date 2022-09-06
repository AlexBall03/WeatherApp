function Header({ Title, Location }) {
    return (
        <header className="Header">
            <h1>{Title}</h1>
            <h2>{Location}</h2>
        </header>
    );
}

export default Header;