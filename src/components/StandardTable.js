import React from 'react';

// Table Component to display energy services
function StandardTable({ data }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead className="bg-info text-white">
                    <tr>
                        <th>No</th>
                        <th>Item</th>
                        <th>Nama</th>
                        <th>Deskripsi Singkat</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.no}>
                            <td className="text-center">{item.no}</td>
                            <td>
                                {item.link ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" alt={item.item}>{item.item}</a>
                                ) : (
                                    <span>{item.item}</span>
                                )}
                            </td>
                            <td>{item.nama}</td>
                            <td>{item.description.map((link) => (
                                <p><a href='{link}'>{link}</a></p>
                            ))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StandardTable;

