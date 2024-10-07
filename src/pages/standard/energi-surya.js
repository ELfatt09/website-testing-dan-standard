import React from 'react';
import StandardTable from '../../components/StandardTable';

const EnergiSuryaStandard = () => {
    const data = [
        {
            no: 1,
            item: 'SNI Surya 1',
            nama: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium feugiat ex quis auctor. Fusce vel rutrum orci.',
            link: 'https://example.com',
            description: [],
        },
        {
            no: 2,
            item: 'SNI Surya 2',
            nama: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium feugiat ex quis auctor. Fusce vel rutrum orci.',
            link: 'https://example.com',
            description: [],
        },
        {
            no: 3,
            item: 'SNI Surya 3',
            nama: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium feugiat ex quis auctor. Fusce vel rutrum orci.',
            link: null,
            description: [
                'https://example1.com',
                'https://example2.com',
            ],
        },
    ];

    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Surya</h1>
                <h3 className="display-6 text-secondary">Standard</h3>
            </div>
            <StandardTable data={data} />
        </div>
    );
};

export default EnergiSuryaStandard;
