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

<section className="flex flex-row md:flex-col px-6 py-8 space-y-8">
  <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white shadow-lg rounded-lg overflow-hidden w-2/5">
    <div className="w-full md:w-1/3 relative h-[250px]" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="200">
      <img src={process.env.PUBLIC_URL + "/File/image/panel.jpg"} alt="Standard and Testing" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <p className="text-white text-center">The government of Indonesia has set several standards for various RE energy technologies...</p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center p-6 md:w-2/3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <Link className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors" to="/standard">Learn More</Link>
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white shadow-lg rounded-lg overflow-hidden w-2/5">
    <div className="w-full md:w-1/3 relative h-[250px]" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="200">
      <img src={process.env.PUBLIC_URL + "/File/image/hydropower.jpg"} alt="Regulation and Research" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <p className="text-white text-center">The Indonesian government has established and implemented various regulations...</p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center p-6 md:w-2/3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <Link className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors" to="/riset">Learn More</Link>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;

