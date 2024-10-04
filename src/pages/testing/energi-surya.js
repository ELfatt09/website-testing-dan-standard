import React from 'react'

const EnergiSuryaTesting = () => {
    const data = [
        {
            no: 1,
            service: 'Jasa Layanan 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            provider: 'Provider 1',
            link: '#'
        },
        {
            no: 2,
            service: 'Jasa Layanan 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            provider: 'Provider 2',
            link: '#'
        },
        {
            no: 3,
            service: 'Jasa Layanan 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            provider: 'Provider 3',
            link: '#'
        },
        {
            no: 4,
            service: 'Jasa Layanan 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            provider: 'Provider 4',
            link: '#'
        },
        {
            no: 5,
            service: 'testing 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            provider: 'Provider 5',
            link: '#'
        }
    ];

    return (
        <div className="container mt-5">
            <div className="mb-4">
                <h1 className="display-3">Energi Surya</h1>
                <h3 className="display-6 text-secondary">Testing</h3>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="bg-success text-white">
                        <tr>
                            <th>No</th>
                            <th>Testing/Jasa Layanan</th>
                            <th>Deskripsi Singkat</th>
                            <th>Service Provider</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.no}>
                                <td>{item.no}</td>
                                <td>{item.service}</td>
                                <td>{item.description}</td>
                                <td>{item.provider}</td>
                                <td><a href={item.link} target="_blank" className="btn btn-outline-success w-100 px-3 py-2 rounded-pill" rel="noopener noreferrer">Link</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnergiSuryaTesting;