import React from 'react';

// Table Component to display energy services
function StandardTable({ data }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead className="bg-success text-white">
                    <tr>
                        <th>Tahun</th>
                        <th>Judul</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.no}>
                            <td className="text-center">{item.tahun}</td>
                            <td>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" alt={item.judul}>{item.judul}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StandardTable;

