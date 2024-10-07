import React from 'react';
import { NavLink, Link } from "react-router-dom";

function Layout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top" id="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="logo.png" alt="Logo" width="30" height="30" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownTesting" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TESTING
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownTesting">
                                    <NavLink className="dropdown-item" to="/testing/energi-angin">ENERGI ANGIN</NavLink>
                                    <NavLink className="dropdown-item" to="/testing/energi-air">ENERGI AIR</NavLink>
                                    <NavLink className="dropdown-item" to="/testing/energi-surya">ENERGI SURYA</NavLink>
                                    <NavLink className="dropdown-item" to="/testing/energi-biomassa">ENERGI BIOMASSA</NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownStandard" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    STANDARD
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownStandard">
                                    <NavLink className="dropdown-item" to="/standard/energi-angin">ENERGI ANGIN</NavLink>
                                    <NavLink className="dropdown-item" to="/standard/energi-air">ENERGI AIR</NavLink>
                                    <NavLink className="dropdown-item" to="/standard/energi-surya">ENERGI SURYA</NavLink>
                                    <NavLink className="dropdown-item" to="/standard/energi-biomassa">ENERGI BIOMASSA</NavLink>
                                    <NavLink className="dropdown-item" to="/standard/energi-nuklir">ENERGI NUKLIR</NavLink>
                                    <NavLink className="dropdown-item" to="/standard/energi-panas-bumi">ENERGI PANAS BUMI</NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownStandard" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    RISET
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownStandard">
                                    <NavLink className="dropdown-item" to="/riset/energi-angin">ENERGI ANGIN</NavLink>
                                    <NavLink className="dropdown-item" to="/riset/energi-surya">ENERGI SURYA</NavLink>
                                    <NavLink className="dropdown-item" to="/riset/energi-air">ENERGI AIR</NavLink>
                                    <NavLink className="dropdown-item" to="/riset/energi-biomassa">ENERGI BIOMASSA</NavLink>
                                    <NavLink className="dropdown-item" to="/riset/energi-panas-bumi">ENERGI PANAS BUMI</NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownStandard" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    REGULASI
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownStandard">
                                    <NavLink className="dropdown-item" to="/regulasi/umum">UMUM</NavLink>
                                    <NavLink className="dropdown-item" to="/regulasi/bioenergi">BIOENERGI</NavLink>
                                    <NavLink className="dropdown-item" to="/regulasi/aneka-ebt">ANEKA EBT</NavLink>
                                    <NavLink className="dropdown-item" to="/regulasi/panas-bumi">PANAS BUMI</NavLink>
                                    <NavLink className="dropdown-item" to="/regulasi/tenaga-nuklir">TENAGA NUKLIR</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1 className="display-2">Database Testing and Standard for Energy</h1>
                </div>
            </section>

            {/* Main Content */}
            <main className="py-2">
                {children}
            </main>

            <footer className="bg-success text-white text-center py-4 mt-4">
                <p>&copy; 2024 Database Testing and Standard for Energy. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Layout;

