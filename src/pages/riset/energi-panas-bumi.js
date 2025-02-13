import React from 'react';
import TestingTable from '../../components/RisetTable';

const EnergiPanasBumiRiset = () => {
    const data = [
    {       
        tahun: 2024,
        judul: 'On-Stream Pipe Scale Inspection Using Gamma-Ray Tomography Technique: Field Experiment in Karaha Geothermal Power Plant, Indonesia',
        link: 'https://example.com',
    },
    {
        tahun: 2024,
        judul: 'Design of the 100 kW Hermetic Turbine for Waste Power Plant at Soreang, West Java, Indonesia',
        link: 'https://example.com',
    },
    {
        tahun: 2024,
        judul: 'Performance pressure control system for inlet turbine using neural network backpropagation and NARX model in the geothermal power plant 3 MW Kamojang-Indonesia',
        link: 'https://example.com',
    },
    {
        tahun: 2024,
        judul: 'A study of the temperature distribution in the OTEC cold water pipe using a heat and mass transfer approach',
        link: 'https://example.com',
    },
    {
        tahun: 2024,
        judul: 'Design optimization of stiffening system for ocean thermal energy conversion (OTEC) cold water pipe (CWP)',
        link: 'https://example.com',
    },
    {
        tahun: 2024,
        judul: 'Study Paraffin wax, palm wax as phase change materials for thermal energy storage in solar water heater',
        link: 'https://example.com',
    },
    {
        tahun: 2024,
        judul: 'Design and construction of compressor heat recovery utilization of ice machine for drying system',
        link: 'https://example.com',
    },
    {
        tahun: 2024,
        judul: 'Investigating the reasons of main steam pressure drop in the main pipe of performance test geothermal power plant of 3 MW Kamojang Indonesia',
        link: 'https://example.com',
    },
    {
        tahun: 2024,
        judul: 'The influence of ovalization on OTEC cold water pipe subjected to bending moment',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Identification for Thermal Energy Optimization in the Process of Esterification Through the Evaluation of Combustion Reactions in Thermal Oil Heater',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Internal flow effects in OTEC cold water pipe: Finite element modelling in frequency and time domain approaches',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Investigation The Effect of Various Temperature-Measuring Configurations on The Thermal Efficiency of Liquid Petroleum Gas Stoves',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'FLORISTIC COMPOSITION AND STRUCTURE OF VEGETATION IN GUNUNG SALAK GEOTHERMAL POWER PLANT, WEST JAVA, INDONESIA',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Assessment of the stiffened panel performance in the OTEC seawater tank design: Parametric study and sensitivity analysis',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Assessment of the OTEC cold water pipe design under bending loading: A benchmarking and parametric study using finite element approach',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Preliminary characterization and thermal evaluation of a direct contact cascaded immiscible inorganic salt/high-density polyethylene as moderate temperature heat storage material',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Geothermal Direct Use for Silkworm Cultivation as a CSR Program in Wayang Windu Geothermal Field: Thermal Energy Calculation Approach',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Encapsulation of paraffin-magnetite, paraffin, and polyethylene glycol in concretes as thermal energy storage',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Analytical and experimental study of hybrid photovoltaic–thermal–thermoelectric systems in sustainable energy generation',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Three-point bending assessment of cold water pipe (CWP) sandwich material for ocean thermal energy conversion (OTEC)',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Mathematical modeling and experimental validation of bifacial photovoltaic–thermal system with mirror reflector',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Generation expansion planning with a renewable energy target and interconnection option: A case study of the Sulawesi region, Indonesia',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Performance Review of Solar-Assisted Heat Pump Systems Using Solar Collectors, PV, and PVT Technologies',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Life cycle engineering (LCE) study for Synechococcus HS-9 biomass production as potential raw material for a third generation biodiesel production',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Gamma scanning technique on geothermal pipe scale thickness measurement',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Modelling and Simulation of Existing Geothermal Power Plant: A Case Study of Darajat Geothermal Power Plant',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Non-linear assessment of cold water pipe (CWP) on the ocean thermal energy conversion (OTEC) installation under bending load',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Sustainable Long-Term Energy Supply and Demand: The Gradual Transition to a New and Renewable Energy System in Indonesia by 2050',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Small-Scale Organic Rankine Cycle Performance Using an Additional Heat Exchanger',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Two-dimensional MHD simulation of the Earth’s magnetosphere',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'On the Dynamic Stability of OTEC Cold Water Pipe (CWP) under Variations of Force Balance Descriptions at the Free Inlet',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Assessment of the stiffened panel performance in the OTEC seawater tank design: Parametric study and sensitivity analysis',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Mathematical modeling and experimental validation of bifacial photovoltaic-thermal system with mirror reflector',
        link: 'https://example.com',
    },
    {
        tahun: 2023,
        judul: 'Assessment of the OTEC cold water pipe design under bending loading: A benchmarking and parametric study using finite element approach',
        link: 'https://example.com',
    }
    ];


    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Panas Bumi</h1>
                <h3 className="display-6 text-secondary">Riset</h3>
            </div>
            <TestingTable data={data} />
        </div>
    );
};

export default EnergiPanasBumiRiset;
