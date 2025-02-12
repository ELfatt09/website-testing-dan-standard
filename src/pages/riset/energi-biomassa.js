import React from 'react';
import TestingTable from '../../components/RisetTable';

const EnergiBiomassaRiset = () => {
    const data = [
        {
            tahun: 2024,
            judul: 'A comparison of the physicochemical properties of microalgae biodiesel with other oilseed feedstocks for sustainable energy production: A meta-analysis',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85197571923&doi=10.22201%2ficat.24486736e.2024.22.3.2329&partnerID=40&md5=1d53f41dc768c7773d3be8243c81dbf4',
        },
        {
            tahun: 2024,
            judul: 'A comprehensive study on transparent conducting oxides in compact microbial fuel cells: Integrated spectroscopic and electrochemical analyses for monitoring biofilm growth',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85183957743&doi=10.1016%2fj.bios.2024.116067&partnerID=40&md5=742ae68702c67ae221d4dc125093afd4',
        },
        {
            tahun: 2024,
            judul: 'Analysis of combustion characteristics and chemical properties for biocoke fuel',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85194823667&doi=10.1016%2fj.engeos.2024.100331&partnerID=40&md5=ade6a7990ba81ffb1ed9c404ab197fd8',
        },
        {
            tahun: 2024,
            judul: 'Characterization of Indonesian Sugar Palm Bunch (Arenga longipes Mogea) Properties for Various Utilization Purposes',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85185837055&doi=10.3390%2ff15020239&partnerID=40&md5=f7e7cefadba8839a6e0a43d5abf966d2',
        },
        {
            tahun: 2024,
            judul: 'Characterization of sago tree parts from Sentani, Papua, Indonesia for biomass energy utilization',
            link: 'http://dx.doi.org/10.1016/j.heliyon.2024.e23993',
        },
        {
            tahun: 2024,
            judul: 'Enhancing biogas production with fungi from oil palm empty fruit bunches: Isolation and innovative application',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85198080292&doi=10.1016%2fj.cscee.2024.100845&partnerID=40&md5=d1658506f6e4eda98ccdfa5baabc74c3',
        },
        {
            tahun: 2024,
            judul: 'Evaluation of readiness to commercialize research results with the IRL framework: a case study of ORC turbines in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85179305259&doi=10.11591%2fijpeds.v15.i1.pp530-539&partnerID=40&md5=9300944d682d85bad39679e6cc10d13e',
        },
        {
            tahun: 2024,
            judul: 'Evolving Paradigms in Sorghum Research: A Bibliometric and Content Analysis of Global Trends and Future Directions',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196956037&doi=10.18280%2fijdne.190318&partnerID=40&md5=feaf647d1e944ea6e9538cc4690966cb',
        },
        {
            tahun: 2024,
            judul: 'Genetic characterization of Indonesian sorghum landraces (Sorghum bicolor (L.) Moench) for yield traits',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85193001853&doi=10.3934%2fAGRFOOD.2024008&partnerID=40&md5=d7d10c2cdfddf753f2416082023c8297',
        },
        {
            tahun: 2024,
            judul: 'Hybrid Biopellets Characterization of Gamal Wood (Gliricidia sepium) and Robusta Coffee Husk at Various Compositions',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85198858586&doi=10.23960%2fjsl.v12i3.913&partnerID=40&md5=ff13d0a88d3d835d1cdac62a3e933196',
        },
        {
            tahun: 2024,
            judul: 'Improving the calorific value of nyamplung (Calophyllum inophyllum l.) seed shell pellets by torrefaction treatment for their use as a renewable energy resource',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85202948662&doi=10.5658%2fWOOD.2024.52.4.363&partnerID=40&md5=ee019f393fc6a1141d249cb49e019b85',
        },
        {
            tahun: 2024,
            judul: 'Interconnected hierarchical 3D porous carbon derived from Saccharum officinarum L. leaf based on the synergistic effect of KOH for high performance supercapacitor',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203143361&doi=10.1080%2f15567036.2024.2397511&partnerID=40&md5=4395c31f83093598cb198bb136feb5ea',
        },
        {
            tahun: 2024,
            judul: 'Kinetics and thermodynamic parameters of palm empty fruit bunch pyrolysis promoted by calcium-rich wastes from coastal-marine residue',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85181685495&doi=10.1016%2fj.biteb.2023.101735&partnerID=40&md5=4b58cbd672abfc4c2deba7a72afd5430',
        },
        {
            tahun: 2024,
            judul: 'Metabolite Compounds of Euglena sp. on Mass Cultivation System under MgCl2 and CaCl2 Salt Stress',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85197438079&doi=10.18517%2fijaseit.14.3.19820&partnerID=40&md5=7884d1a807136dc0728551c03ccefe99',
        },
        {
            tahun: 2024,
            judul: 'Physical, chemical, and thermal properties of branches mangrove wood of Bruguiera gymnorhiza during conversion into charcoal and charcoal briquette',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85196063721&doi=10.1088%2f1755-1315%2f1352%2f1%2f012038&partnerID=40&md5=41f1cdc5262f11aef81a3296fd397b66',
        },
        {
            tahun: 2024,
            judul: 'Quality of Biopellet from Rice By-Products Valorisation by Application of Appropriate Technology in Densification',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85185820877&doi=10.1063%2f5.0184471&partnerID=40&md5=f1df7301798190a8e78414734cb92e05',
        },
        {
            tahun: 2024,
            judul: 'Starch – carrageenan based low-cost membrane permeability characteristic and its application for yeast microbial fuel cells',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85188460166&doi=10.61435%2fijred.2024.59160&partnerID=40&md5=5f58f0d5f096cfff1966c6dcaa215293',
        },
        {
            tahun: 2024,
            judul: 'Study on Palm Oil Cultivation and Processing Technology to Support the Biofuel Program (Optimization for the Development of Palm Oil-Based Energy Plantation in Indonesia)',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85197744599&doi=10.1088%2f1755-1315%2f1364%2f1%2f012011 &partnerID=40&md5=e9492694dd5546657439cf60bf9238a8',
        },
        {
            tahun: 2024,
            judul: 'The impact of shade net use on total nitrogen removal by duckweed (Lemna perpusilla) at different levels of catfish farming effluent',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85202190711&doi=10.1016%2fj.aquaeng.2024.102456&partnerID=40&md5=9b30d875a8589ef718381e0cdc4a1387',
        },
        {
            tahun: 2024,
            judul: 'The Processing of Fatty Acid Methyl Ester (FAME) from Waste Cooking Palm Oil using Coconut Coir Dust Ash Catalyst',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85185784893&doi=10.1063%2f5.0184207&partnerID=40&md5=a3071ad2d6572af66dbeaedbae5a9749',
        },
        {
            tahun: 2024,
            judul: 'Variability of pod and seed traits on candidate plus tree Pongamia pinnata in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85189970388&doi=10.1080%2f21580103.2024.2328051&partnerID=40&md5=341d7b3f7741caa2d262ea39c62a7302',
        },
        {
            tahun: 2024,
            judul: 'A comprehensive study on transparent conducting oxides in compact microbial fuel cells: Integrated spectroscopic and electrochemical analyses for monitoring biofilm growth',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85183957743&doi=10.1016%2fj.bios.2024.116067&partnerID=40&md5=742ae68702c67ae221d4dc125093afd4',
        },
        {
            tahun: 2023,
            judul: 'Agricultural residues biomass as a solid fuel for co-combustion in Indonesia - A review',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85178005167&doi=10.1063%2f5.0150445&partnerID=40&md5=65e15087b20e2b8dc39263ced816722c',
        },
        {
            tahun: 2023,
            judul: 'Bioengineering strategies of microalgae biomass for biofuel production: recent advancement and insight',
            link: 'http://dx.doi.org/10.1080/21655979.2023.2252228',
        },
        {
            tahun: 2023,
            judul: 'Briquettes Made of Branches Wood of Three Mangrove Species Bonded by Starch Adhesive',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85167836347&doi=10.3390%2fma16155266&partnerID=40&md5=94d0505396923b54a32087b2e2988a04',
        },
        {
            tahun: 2023,
            judul: 'Carbon credit and economic feasibility analysis of biomass-solar PV-battery power plant for application in Indonesia remote area',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85173497417&doi=10.1016%2fj.renene.2023.119383&partnerID=40&md5=6f139877d34157a210686946aed160c3',
        },
        {
            tahun: 2023,
            judul: 'Characteristics of Utilization of Palm Fronds, Oil Palm Stems and Empty Fruit Bunches as Biomass Co-Firing Fuels on Coal-Fired Power plant',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85187555705&doi=10.1109%2fICSGTEIS60500.2023.10424181&partnerID=40&md5=b1efdff10cd0fe444b56ecca2b2a8869',
        },
        {
            tahun: 2023,
            judul: 'Degradation Rate of Brown Macroalgae Sargassum sp. Conversion to Bio-Oil via A Slow Pyrolysis',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85165158089&doi=10.20508%2fijrer.v13i2.13807.g8749&partnerID=40&md5=afc1bde8c83327058790b9225fb4a810',
        },
        {
            tahun: 2023,
            judul: 'Determination of optimum technologies implementation scenarios toward net zero emissions in palm oil biodiesel production',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85164770592&doi=10.1088%2f1755-1315%2f1187%2f1%2f012029&partnerID=40&md5=ae9bae74d5f99f55ef44bde5f9bf8e18',
        },
        {
            tahun: 2023,
            judul: 'Eucalyptus pellita and Acacia hybrid species: Potential bioenergy plantation in managing the risk of invasive in Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85164574003&doi=10.1088%2f1755-1315%2f1182%2f1%2f012019&partnerID=40&md5=68d800ff0bb18135482bf8847ac6d79d',
        },
        {
            tahun: 2023,
            judul: 'Increase biomass production of Navicula salinicola in photobioreactors by carbon dioxide applications at different levels of harvesting',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85177887438&doi=10.1063%2f5.0175053&partnerID=40&md5=667abc75924ff37fa1f984a1761b5cb7',
        },
        {
            tahun: 2023,
            judul: 'Insight into the pyrolysis behavior of the drained Sumatra peat soil and the characteristics of the resulting biochar for carbon dioxide (CO2) capture',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85175457360&doi=10.1016%2fj.biteb.2023.101680&partnerID=40&md5=d57cad00e83d36eed238a8a4502532fa',
        },
        {
            tahun: 2023,
            judul: 'Introducing a new variety of interspecific Acacia hybrid (Acacia mangium × A. auriculiformis) for renewable biomass energy',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85164595605&doi=10.1088%2f1755-1315%2f1182%2f1%2f012020&partnerID=40&md5=3aee9fa9885f827546bbc9d5b74b7798',
        },
        {
            tahun: 2023,
            judul: 'Optimizing Local Renewable Energy Resources for Reducing Energy Dependency on An Isolated Island: A Case Study of Saumlaki Island, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174609306&doi=10.1109%2fICHVEPS58902.2023.10257316&partnerID=40&md5=1705b6709e5f60fefe4989dd112bc106',
        },
        {
            tahun: 2023,
            judul: 'Optimizing the role of new renewable energy (including nuclear power plant) on the expansion planning of power generation in West Kalimantan',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85159884802&doi=10.1063%2f5.0126502&partnerID=40&md5=18b46754223b7dbd8b3b352af0aaed3d',
        },
        {
            tahun: 2023,
            judul: 'Renewable energy from secondary wood products contributes to local green development: the case of small-scale privately owned forests in Ciamis Regency, Indonesia',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85148454860&doi=10.1186%2fs13705-023-00383-7&partnerID=40&md5=394abce5d1df6340f32cd219a98879ac',
        },
        {
            tahun: 2023,
            judul: 'Restoring ex mining area using Pongamia pinnata in Central Kalimantan: a reclamation program alternative base on bioenergy species',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85181561370&doi=10.1088%2f1755-1315%2f1282%2f1%2f012044&partnerID=40&md5=e07f264ca3e44271f55dd45f5bf15550',
        },
        {
            tahun: 2023,
            judul: 'Review of Smart Grids Advancements of Energy Mix Sources',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85177564875&doi=10.1063%2f5.0153036&partnerID=40&md5=e7034618dae9653ef6bf3ac784b05446',
        },
        {
            tahun: 2023,
            judul: 'Sustainability assessment of palm oil mills effluent utilization for electricity conversion',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85152897315&doi=10.1088%2f1755-1315%2f1151%2f1%2f012038&partnerID=40&md5=fb6757caa6e9a927cd6dc1d8845bb309',
        },
        {
            tahun: 2023,
            judul: 'Sustainable Long-Term Energy Supply and Demand: The Gradual Transition to a New and Renewable Energy System in Indonesia by 2050',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85149456691&doi=10.14710%2fijred.2023.50361& partnerID=40&md5=258c28d93335bcb1f4935d9e2676334e',
        },
        {
            tahun: 2023,
            judul: 'The effectiveness of pretreated biomass using autoclave heat shock with H2SO4 for bioethanol production in simultaneous saccharification and fermentation',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85177821155&doi=10.1063%2f5.0176076&partnerID=40&md5=310a11c650eaeebd660eba2a47b1ea20',
        },
        {
            tahun: 2023,
            judul: 'Valorization of Banana Bunch Waste as a Feedstock via Hydrothermal Carbonization for Energy Purposes',
            link: 'https://www.scopus.com/inward/record.uri?eid=2-s2.0-85160317222&doi=10.12911%2f22998993%2f163350&partnerID=40&md5=487f2b5121c8bc339183e7d3b955b2d1',
        },
    ];


    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Biomassa</h1>
                <h3 className="display-6 text-secondary">Riset</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiBiomassaRiset;
