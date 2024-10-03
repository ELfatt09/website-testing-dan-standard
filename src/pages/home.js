import React from 'react'

const Home = () => {
    return (
        <>
            <section className="services">
                <div className="container">
                    <h2>Our Services</h2>
                    <div className="row">
                        <div className="col-md-4 service-item">
                            <img src="https://via.placeholder.com/400x250" alt="Renewable Energy Testing" />
                            <h3>Renewable Energy Testing</h3>
                            <p>Access testing services for solar, wind, and other renewable energies to ensure compliance
                                with
                                standards.</p>
                        </div>
                        <div className="col-md-4 service-item">
                            <img src="https://via.placeholder.com/400x250" alt="Conservation Efforts" />
                            <h3>Conservation Efforts</h3>
                            <p>Discover the best practices and technologies to conserve energy in industrial and residential
                                settings.</p>
                        </div>
                        <div className="col-md-4 service-item">
                            <img src="https://via.placeholder.com/400x250" alt="Oil, Gas, & Coal Testing" />
                            <h3>Oil, Gas, & Coal Testing</h3>
                            <p>Comprehensive testing for fossil fuel energy sectors to meet regulatory requirements and
                                standards.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

