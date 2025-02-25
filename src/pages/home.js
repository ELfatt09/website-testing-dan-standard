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
    
    <section className="my-8">
  <div className="mx-auto" data-aos="fade-up" data-aos-duration="1000">
    <h2 className="text-center text-5xl font-bold my-5 md:my-7 lg:my-10 font-sans uppercase">
      <span className="block">Database Testing and Standard</span>
      <span className="block mb-3">for Renewable Energy</span>
      <hr className="border-2 border-sky-600 w-1/2 mx-auto rounded-full" />
    </h2>
    <div className="flex justify-center gap-2 flex-wrap" data-aos="fade-up" data-aos-duration="1000">
      
      {/* Card 1 - About Us */}
      <div className="w-2/5 h-full">
        <div className="h-full shadow-sm rounded-lg overflow-hidden">
          <img src={process.env.PUBLIC_URL + "/File/image/brin2.png"} alt="About us" className="w-full h-1/2" />
          <div className="p-4 w-full">
            <h3 className="text-xl font-semibold">About us</h3>
            <p className="text-gray-600 text-justify">
            Database Testing and Standards for Renewable Energy provides valuable information on the standards and testing requirements for renewable energy (RE) technology in Indonesia. This database also includes current regulations in RE in Indonesia and research conducted by the National Research and Innovation Agency (Badan Riset dan Inovasi Nasional) related to renewable energy.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 - Our Goals */}
      <div className="w-2/5 h-full" >
        <div className="shadow-sm rounded-lg overflow-hidden">
          <img src={process.env.PUBLIC_URL + "/File/image/tiang.jpg"} alt="Our Goals" className="w-full h-1/2" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Our Goals</h3>
            <p className="text-gray-600 ">
            We aim to offer extensive information on Renewable Energy in Indonesia. Whether you need details about the government-mandated standards or specifics on testing—such as what tests are necessary, who can conduct them, and their locations—you'll find all the information you need right here.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 - Contact Us */}
      <div className="w-4/5">
        <div className="h-full w-full shadow-sm rounded-lg overflow-hidden flex flex-row">
          <img src={process.env.PUBLIC_URL + "/File/image/prtps.png"} alt="Contact us" className="w-1/2" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Contact us</h3>
            <p className="text-gray-600">
            The Research Center for Testing Technology and Standard ensures quality and compliance in renewable energy through regulations, testing, and standards.
              <br />Phone: <a href="tel:+62811 1933 3594" className='text-sky-600'>0811 1933 3594</a>
              <br />E-Mail: <a href="mailto:prtp@brin.go.id" className='text-sky-600'>prtp@brin.go.id</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 p-3 rounded-lg">
    <div className="" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="200">
      <img src={process.env.PUBLIC_URL + "/File/image/panel.jpg"} alt="Standard and Testing" className="w-full rounded-lg" />
    </div>
    <div className="flex items-center justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div>
        <h3 className="text-2xl font-semibold">Standard and Testing</h3>
        <hr className="my-2" />
        <p className="text-gray-600">The government of Indonesia has set several standards for various RE energy technologies...</p>
        <a className="btn btn-outline-info px-4 py-2 rounded-full border border-blue-500 text-blue-500" href="/">Lorem</a>
    </div>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 p-3 rounded-lg">
    <div className="block lg:hidden" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="200">
      <img src={process.env.PUBLIC_URL + "/File/image/hydropower.jpg"} alt="Regulation and Research" className="w-full rounded-lg" />
    </div>
    <div className="flex items-center justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div>
        <h3 className="text-2xl font-semibold">Regulation and Research</h3>
        <hr className="my-2" />
        <p className="text-gray-600">The Indonesian government has established and implemented various regulations...</p>
        <a className="btn btn-outline-info px-4 py-2 rounded-full border border-blue-500 text-blue-500" href="/">Lorem</a>
      </div>
    </div>
    <div className="hidden lg:block" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="200">
      <img src={process.env.PUBLIC_URL + "/File/image/hydropower.jpg"} alt="Regulation and Research" className="w-full rounded-lg" />
    </div>
  </div>
</section>

    </>
  );
}

export default Home;

