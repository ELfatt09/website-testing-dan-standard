import React from 'react';
import TestingTable from '../../components/RisetTable';

const EnergiSuryaRiset = () => {
    const data = [
        {
            tahun: 2024,
            judul: 'A stacked LSTM model for day-ahead solar irradiance forecasting under tropical seasons in Java-Bali',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85198503937&doi=10.11591%2fijpeds.v15.i3.pp1878-1891&partnerID=40&md5=e16bb4475a301e7405f0ab536ec8b32f',
        },
        {
            tahun: 2024,
            judul: 'A systematic decision-making approach to optimizing microgrid energy sources in rural areas through diesel generator operation and techno-economic analysis: A case study of Baron Technopark in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85188422362&doi=10.61435%2fijred.2024.59560&partnerID=40&md5=b2967de22227613ceddb901b91d7750c',
        },
        {
            tahun: 2024,
            judul: 'Accelerating Renewable Energy Integration in Energy Planning Considering the PV Techno-Economics and Hourly Profile, Case Study: Indonesian Power Sector',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85188348846&doi=10.32479%2fijeep.15503&partnerID=40&md5=ac6a6c1dc735bf8394e03ce2cfeb39b8',
        },
        {
            tahun: 2024,
            judul: 'Analysis of Existing and Forecasting for Coal and Solar Energy Consumption on Climate Change in Asia Pacific: New Evidence for Sustainable Development Goals',
            link: '',
        },
        {
            tahun: 2024,
            judul: 'Application of photovoltaic water pumping system for hydroponic plants to support urban farming small businesses during the COVID-19 pandemic',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203817755&doi=10.1063%2f5.0222384&partnerID=40&md5=4ff3c0ee6182bba77e93a00c1a245d38',
        },
        {
            tahun: 2024,
            judul: 'Bibliometric analysis of carbon-based electrode perovskite solar cells progress',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85192097420&doi=10.1016%2fj.solener.2024.112587&partnerID=40&md5=05ce91a524f2cc0461fb0faeb52fe7fe',
        },
        {
            tahun: 2024,
            judul: 'Characterization of conducted emissions at DC line of off-grid PV systems',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201153188&doi=10.1063%2f5.0207870&partnerID=40&md5=7a3103eb894fab4d85c2aefb55709567',
        },
        {
            tahun: 2024,
            judul: 'Comparative Analysis of Conventional and Electric Motor Propulsion Systems for "Sandek" Fishing Boats in West Sulawesi from a Sustainable Economical Aspect',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85187297526&doi=10.1051%2fe3sconf%2f202448403002&partnerID=40&md5=719b9e4ef6e49ac264a186c15b3be1b5',
        },
        {
            tahun: 2024,
            judul: 'Design and construction of on-grid floating PV in lake PUSPIPTEK-Serpong',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201154456&doi=10.1063%2f5.0206867&partnerID=40&md5=11f5cbac3f56b3f51cb1ed38f700c5e4',
        },
        {
            tahun: 2024,
            judul: 'Design of multi-purpose portable lamp for peddlers and street vendors',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201163031&doi=10.1063%2f5.0206086&partnerID=40&md5=88f05bdbd0131e50a4c5ef8391851fdc',
        },
        {
            tahun: 2024,
            judul: 'Development of a novel tray solar dryer for aquaculture product: Experimental study on drying kinetics and product quality in Eucheuma cottonii seaweed',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85189747888&doi=10.1016%2fj.solener.2024.112503&partnerID=40&md5=04ce7606f86046a42d63557ecef2a263',
        },
        {
            tahun: 2024,
            judul: 'Development of photoelectrochemical water splitting photoanode: bibliometric analysis and artificial intelligence advancement',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85180188665&doi=10.1007%2fs10098-023-02686-x&partnerID=40&md5=e92b215a0e9fc7d8118c6ef5c9e6d262',
        },
        {
            tahun: 2024,
            judul: 'Direct synthesis of PbI2 precursor film via magnetic field- and additive-assisted electrodeposition for stable carbon-based perovskite solar cells',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85184741774&doi=10.1016%2fj.jallcom.2024.173706&partnerID=40&md5=3bdd904eefb43f5bcf52fd3d9da6894b',
        },
        {
            tahun: 2024,
            judul: 'Dynamic operating behavior of a solar hybrid microturbine system: A comparative study of serial and parallel configurations',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203412856&doi=10.1016%2fj.energy.2024.133058&partnerID=40&md5=de07d33c043dac8940dbde1769acc38f',
        },
        {
            tahun: 2024,
            judul: 'Energy efficiency examination based on light intensity and exposure time on UV-C lamps sterilizer box: A COVID-19 prevention tool',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201158918&doi=10.1063%2f5.0205699&partnerID=40&md5=3dd22ec20fdbcf19e73a0d5fdc626907',
        },
        {
            tahun: 2024,
            judul: 'Enhanced performance of HTM-free perovskite solar cells with free-standing carbon electrode via surface treatment and conductive support',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85193204170&doi=10.1016%2fj.synthmet.2024.117646&partnerID=40&md5=7d59c60da3737b59ff05de81f33ffe51',
        },
        {
            tahun: 2024,
            judul: 'Enhancement in ZnO-based self-powered photodetector by inserting Mn dopant',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203866910&doi=10.1016%2fj.physb.2024.416543&partnerID=40&md5=a57ec462777d5fe8aa74bc5eab6a4905',
        },
        {
            tahun: 2024,
            judul: 'Evaluating Performance and Grid Impacts of On-Grid Rooftop PV System: Case Study of A Mosque',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196362505&doi=10.1088%2f1755-1315%2f1344%2f1%2f012012&partnerID=40&md5=c340bf7a9885dc7b2e7a999c4763b08f',
        },
        {
            tahun: 2024,
            judul: 'Exploring heterogenous TiO2 nanocrystals from natural ilmenite mineral extraction for energy application',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85178145954&doi=10.1016%2fj.mset.2023.11.001&partnerID=40&md5=78727af5a7bd2f252becc2293343e50f',
        },
        {
            tahun: 2024,
            judul: 'Fabrication of binder-free TiO2 P 25 films on flexible PET/ITO substrate for photoanode in dye-sensitized solar cells',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196146632&doi=10.1016%2fj.optmat.2024.115690&partnerID=40&md5=52317467090b92af80cb6fd9f3cb65ba',
        },
        {
            tahun: 2024,
            judul: 'Graphene oxide doping in tropical almond (terminalia catappa L.) fruits extract mediated green synthesis of TiO2 nanoparticles for improved DSSC power conversion efficiency',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85189967428&doi=10.1016%2fj.heliyon.2024.e29370&partnerID=40&md5=9ff6d5fa12300cd681e75ed37a74d452',
        },
        {
            tahun: 2024,
            judul: 'Green Energy Growth: Enhancing Agricultural Sustainability through Agrivoltaic Solutions in the Modern Era',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203586799&doi=10.70082%2fesiculture.vi.780&partnerID=40&md5=e170598ca21b64faf85e98b0b2dc133e',
        },
        {
            tahun: 2024,
            judul: 'Improved efficiency and stability of dye-sensitized solar cells by using iodide-based electrolyte with high viscosity solvent',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85182022776&doi=10.1016%2fj.matlet.2023.135847&partnerID=40&md5=5ed6623a7cf168daab7a48ad06a3d87f',
        },
        {
            tahun: 2024,
            judul: 'Improving the single current probe method of in-circuit impedance measurement',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85201156297&doi=10.1063%2f5.0205694&partnerID=40&md5=ac3fcb7c603e9f0c0e3f4c27014655c7',
        },
        {
            tahun: 2024,
            judul: 'Influence of photoanode pre-heating treatment temperatures prior to dye immersion process on dye-sensitized solar cells photovoltaic performances',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196412774&doi=10.1088%2f1755-1315%2f1344%2f1%2f012013&partnerID=40&md5=0b53b2e62057827899a9798e4283ed71',
        },
        {
            tahun: 2024,
            judul: 'Innovative surfactant-free synthesis of core-shell SiO2/ZnO particles: rapid ultrasonication and photocatalytic inhibition',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85191410557&doi=10.1039%2fd4ra01309c&partnerID=40&md5=a5078131e7b12261204b57e8846d8cac',
        },
        {
            tahun: 2024,
            judul: 'INVESTIGATION OF GRANULAR NATURAL STONE MATERIALS AS PHOTOTHERMAL ABSORBERS FOR SUSTAINABLE AND ENVIRONMENTALLY FRIENDLY ENERGY HARVESTING',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85188451350&doi=10.5937%2fjaes0-47834&partnerID=40&md5=87b529a91830f7db257c56a471cd054c',
        },
        {
            tahun: 2024,
            judul: 'Light Management Investigation of Transparent DSSC based on Ln3+ion doped BaO-ZnF2-B2O3-TeO2Glass (Ln3+= Dy3+/Sm37Eu3+) as UV Down-conversion Material',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85190454346&doi=10.1088%2f1742-6596%2f2734%2f1%2f012034&partnerID=40&md5=16edb19d1a0d47e3529b80e26771511d',
        },
    ];



    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Surya</h1>
                <h3 className="display-6 text-secondary">Riset</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiSuryaRiset;
