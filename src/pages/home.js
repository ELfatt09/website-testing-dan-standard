import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

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
                            <div className="container-fluid rounded-4 p-3 shadow-sm" align="center" style={{height: '100vh'}}>
                                <img src={process.env.PUBLIC_URL + "/File/image/brin2.png"} alt="Lorem Ipsum" className="img-fluid rounded-4 mb-3" />
                                <div align="left" className="ps-4">
                                    <h3>About us</h3>
                                    <p>
                                    Database Testing and Standards for Renewable Energy provides valuable information on the
                                    standards and testing requirements for renewable energy (RE) technology in Indonesia. This
                                    database also includes current regulations in RE in Indonesia and research conducted by the
                                    National Research and Innovation Agency (Badan Riset dan Inovasi Nasional) related to
                                    renewable energy.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 px-2" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="500">
                            <div className="container-fluid rounded-4 p-3 shadow-sm" align="center" style={{height: '100vh'}}>
                                <img src={process.env.PUBLIC_URL + "/File/image/tiang.jpg"} alt="Lorem Ipsum" className="img-fluid rounded-4 mb-3" />
                                <div align="left" className="ps-4">
                                    <h3>Our Goals</h3>
                                    <p>
                                        We aim to offer extensive information on Renewable Energy in Indonesia. Whether
                                    you need details about the government-mandated standards or specifics on
                                    testing—such as what tests are necessary, who can conduct them, and their
                                    locations—you&#39;ll find all the information you need right here.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 px-2" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="900">
                            <div className="container-fluid rounded-4 p-3 shadow-sm" align="center" style={{height: '100vh'}}>
                                <img src={process.env.PUBLIC_URL + "/File/image/prtps.png"} alt="Lorem Ipsum" className="img-fluid rounded-4 mb-3" />
                                <div align="left" className="ps-4">
                                    <h3>Contact us</h3>
                                    <p>
                                    Research Center for Testing Technology and Standard 
(Pusat Riset Teknologi Pengujian dan Standar)
Kawasan Sains dan Teknologi BJ Habibie Gedung 720 
Jl. Raya Puspiptek, Setu, Tangerang Selatan, Banten 15314 
<br />
Phone: 0811 1933 3594 
<br />
E-Mail: prtp@brin.go.id
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid">
                <div className="row my-4 rounded-4 p-3">
                    <div className="col-lg-6" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + "/File/image/panel.jpg"} alt="Lorem Ipsum" className="img my-auto h-auto w-100 rounded-4 mb-3" />
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <div>
                                <h3>Standard and Testing</h3>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenean porta mi erat, non tristique quam ornare at.
                                    Etiam tempus, felis et elementum finibus, enim sapien commodo mauris,
                                    id elementum metus odio vitae ipsum.
                                </p>
                                <Link className="btn btn-outline-info px-4 py-2 rounded-pill" to="/">Lorem</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4 rounded-4 p-3">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <div>
                                <h3>Research and Regulation</h3>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenean porta mi erat, non tristique quam ornare at.
                                    Etiam tempus, felis et elementum finibus, enim sapien commodo mauris,
                                    id elementum metus odio vitae ipsum.
                                </p>
                                <Link className="btn btn-outline-info px-4 py-2 rounded-pill" to="/">Lorem</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + "/File/image/hydropower.jpg"} alt="Lorem Ipsum" className="img my-auto h-auto w-100 rounded-4 mb-3" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

