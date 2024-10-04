import React from 'react'

const EnergiAnginTesting = () => {
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
        }
    ];

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-success">Energi Angin</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
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
                                <td><a href={item.link} target="_blank" className="btn btn-success w-100 px-quto py-2 rounded-pill" rel="noopener noreferrer">Link</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnergiAnginTesting;