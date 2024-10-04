import React from 'react';

function Layout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="logo.png" alt="Logo" width="30" height="30" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">HOME</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownTesting" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TESTING
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownTesting">
                                    <a className="dropdown-item" href="/testing/energi-angin">ENERGI ANGIN</a>
                                    <a className="dropdown-item" href="/testing/energi-surya">ENERGI SURYA</a>
                                    <a className="dropdown-item" href="/testing/energi-air">ENERGI AIR</a>
                                    <a className="dropdown-item" href="/testing/energi-biomassa">ENERGI BIOMASSA</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownStandard" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    STANDARD
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownStandard">
                                    <a className="dropdown-item" href="#">ENERGI ANGIN</a>
                                    <a className="dropdown-item" href="#">ENERGI SURYA</a>
                                    <a className="dropdown-item" href="#">ENERGI AIR</a>
                                    <a className="dropdown-item" href="#">ENERGI BIOMASSA</a>
                                    <a className="dropdown-item" href="#">ENERGI PANAS BUMI</a>
                                    <a className="dropdown-item" href="#">ENERGI NUKLIR</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownStandard" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    RISET
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownStandard">
                                    <a className="dropdown-item" href="#">ENERGI ANGIN</a>
                                    <a className="dropdown-item" href="#">ENERGI SURYA</a>
                                    <a className="dropdown-item" href="#">ENERGI AIR</a>
                                    <a className="dropdown-item" href="#">ENERGI BIOMASSA</a>
                                    <a className="dropdown-item" href="#">ENERGI PANAS BUMI</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownStandard" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    REGULASI
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownStandard">
                                    <a className="dropdown-item" href="#">UMUM</a>
                                    <a className="dropdown-item" href="#">BIOENERGI</a>
                                    <a className="dropdown-item" href="#">ANEKA EBT</a>
                                    <a className="dropdown-item" href="#">PANAS BUMI</a>
                                    <a className="dropdown-item" href="#">TENAGA NUKLIR</a>
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
                    <h1>Database Testing and Standard for Energy</h1>
                </div>
            </section>

            {/* Main Content */}
            <main>
                {children}
            </main>

            <footer className="bg-success text-white text-center py-4">
                <p>&copy; 2024 Database Testing and Standard for Energy. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Layout;
