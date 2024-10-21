import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { Link } from 'react-router-dom'

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <section className="my-5">
                <div className="container-fluid" data-aos="slide-up" data-aos-duration="1000">
                    <h2 align="center" className="display-5 my-4">Database Testing and Standard for Energy</h2>
                    <div className="row">
                        <div className="col-md-4 px-2" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="100">
                            <div className="container-fluid rounded-4 p-3 shadow-sm" align="center">
                                <img src="https://via.placeholder.com/400x250" alt="Lorem Ipsum" className="img-fluid rounded-4 mb-3" />
                                <div align="left" className="ps-4">
                                    <h3>About us</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut
                                        labore et dolore magna aliqua.</p></div>
                            </div>
                        </div>
                        <div className="col-md-4 px-2" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="500">
                            <div className="container-fluid rounded-4 p-3 shadow-sm" align="center">
                                <img src="https://via.placeholder.com/400x250" alt="Lorem Ipsum" className="img-fluid rounded-4 mb-3" />
                                <div align="left" className="ps-4">
                                    <h3>Our Goals</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut
                                        labore et dolore magna aliqua.</p></div>
                            </div>
                        </div>
                        <div className="col-md-4 px-2" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="900">
                            <div className="container-fluid rounded-4 p-3 shadow-sm" align="center">
                                <img src="https://via.placeholder.com/400x250" alt="Lorem Ipsum" className="img-fluid rounded-4 mb-3" />
                                <div align="left" className="ps-4">
                                    <h3>Contact us</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut
                                        labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid">
                <div className="row my-4 rounded-4 p-3" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="200">
                    <div className="col-lg-6">
                        <img src={process.env.PUBLIC_URL + "/File/image/panel.jpg"} alt="Lorem Ipsum" className="img-fluid rounded-4 mb-3" />
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <div>
                                <h3>Standard and Testing</h3>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta mi erat, non tristique quam ornare at. Etiam tempus, felis et elementum finibus, enim sapien commodo mauris, id elementum metus odio vitae ipsum. Morbi porttitor mi sit amet ante consequat efficitur. Nulla facilisi. Donec a erat pretium, volutpat felis id, varius mauris. Mauris quis luctus sem. Quisque ultrices risus id risus volutpat, ut tempus est ornare. Morbi eu diam congue, semper libero ac, sollicitudin nulla. Fusce laoreet consectetur quam, et condimentum mauris efficitur sit amet. Curabitur sed lorem nisl. Aliquam vel dui ornare, aliquam quam a, lobortis sapien. Morbi convallis quis velit sed dictum. Ut ex risus, dictum et mi nec, egestas pharetra nibh. Morbi volutpat arcu vel gravida aliquam. Nulla eget purus massa.
                                </p>
                                <Link className="btn btn-outline-success px-4 py-2 rounded-pill" to="/">Lorem</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4 rounded-4 p-3" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="200">
                    <div className="d-lg-block d-none col-lg-6">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <div>
                                <h3>Research and Regulation</h3>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta mi erat, non tristique quam ornare at. Etiam tempus, felis et elementum finibus, enim sapien commodo mauris, id elementum metus odio vitae ipsum. Morbi porttitor mi sit amet ante consequat efficitur. Nulla facilisi. Donec a erat pretium, volutpat felis id, varius mauris. Mauris quis luctus sem. Quisque ultrices risus id risus volutpat, ut tempus est ornare. Morbi eu diam congue, semper libero ac, sollicitudin nulla. Fusce laoreet consectetur quam, et condimentum mauris efficitur sit amet. Curabitur sed lorem nisl. Aliquam vel dui ornare, aliquam quam a, lobortis sapien. Morbi convallis quis velit sed dictum. Ut ex risus, dictum et mi nec, egestas pharetra nibh. Morbi volutpat arcu vel gravida aliquam. Nulla eget purus massa.
                                </p>
                                <Link className="btn btn-outline-success px-4 py-2 rounded-pill" to="/">Lorem</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={process.env.PUBLIC_URL + "/File/image/hydropower.jpg"} alt="Lorem Ipsum" className="img-fluid rounded-4 mb-3 " />
                    </div>
                    <div className="d-lg-none d-block col-lg-6">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <div>
                                <h3>Research and Regulation</h3>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta mi erat, non tristique quam ornare at. Etiam tempus, felis et elementum finibus, enim sapien commodo mauris, id elementum metus odio vitae ipsum. Morbi porttitor mi sit amet ante consequat efficitur. Nulla facilisi. Donec a erat pretium, volutpat felis id, varius mauris. Mauris quis luctus sem. Quisque ultrices risus id risus volutpat, ut tempus est ornare. Morbi eu diam congue, semper libero ac, sollicitudin nulla. Fusce laoreet consectetur quam, et condimentum mauris efficitur sit amet. Curabitur sed lorem nisl. Aliquam vel dui ornare, aliquam quam a, lobortis sapien. Morbi convallis quis velit sed dictum. Ut ex risus, dictum et mi nec, egestas pharetra nibh. Morbi volutpat arcu vel gravida aliquam. Nulla eget purus massa.
                                </p>
                                <Link className="btn btn-outline-success px-4 py-2 rounded-pill" to="/">Lorem</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Home;

