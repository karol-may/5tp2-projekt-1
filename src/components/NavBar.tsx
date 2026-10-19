function NavBar(){
    return(
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <ul className="navbar-nav d-flex flex-row gap-2">
                <li className="nav-item">Strona główna</li>
                <li className="nav-item">Użytkownicy</li>
            </ul>
        </div>
    </nav>
    );
}

export {NavBar}