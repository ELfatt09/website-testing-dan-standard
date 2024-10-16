import React from 'react';
import TestingTable from '../../components/RisetTable';

const EnergiBiomassaRiset = () => {
    const data = [
        {
            tahun: 2000,
            judul: 'Lorem Ipsum',
            link: 'https://example.com',
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
