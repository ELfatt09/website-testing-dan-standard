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
                    <h2 align="center" className="display-5 my-4">Database Testing and Standar for Renewable Enrgy</h2>
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
                                The government of Indonesia has set several standards for various RE energy technologies
by adopting prevailing international standards. These standards ensure products and
services meet consistent quality levels, enhancing reliability and performance. Most
importantly standards establish safety guidelines to protect consumers, workers, and the
environment. Compliance with standards can facilitate entry into new markets by meeting
regulatory and consumer expectations.</p><p>
Hence various testing are required to fulfil these standards. These tests ensure that
products or services meet specified requirements and function correctly, helping to
maintain high quality. Tests also identifies defects or issues before a product reaches the
end user, reducing the risk of failures and improving reliability. Tests verify that a product is
built according to specifications (verification) and meets the needs of users (validation).
                                </p>
                                <Link className="btn btn-outline-info px-4 py-2 rounded-pill" to="/">Lorem</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4 rounded-4 p-3">
                <div className="col-lg-6  d-lg-none d-block" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + "/File/image/hydropower.jpg"} alt="Lorem Ipsum" className="img my-auto h-auto w-100 rounded-4 mb-3" />
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <div>
                                <h3>Regulation and Research</h3>
                                <hr />
                                <p>
                                The Indonesian government has established and implemented various regulations to
promote the adoption of renewable energy and to encourage research and development in
renewable technologies in Indonesia.</p><p>
These regulations cover aspects of renewable energy technology and the market to
stimulate the development and utilization of renewable energy sources, contributing to the
reduction of greenhouse gas emissions and to combat climate change. By diversifying
energy sources, the government aims to reduce reliance on fossil fuels, thereby enhancing
energy security and stability.</p><p>
Further, the government offers financial incentives, such as tax credits and grants, to attract
investment in renewable energy projects, while also implementing measures to mitigate the
environmental impact, focusing on issues like land use and resource management.
                                </p>
                                <Link className="btn btn-outline-info px-4 py-2 rounded-pill" to="/">Lorem</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + "/File/image/hydropower.jpg"} alt="Lorem Ipsum" className="img my-auto h-auto w-100 rounded-4 mb-3" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

