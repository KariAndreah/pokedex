import React from 'react';
import './PokeStats.css';

const PokeStats = ({ data }) => {
    let stats = []
    for (let i = 0; i < data.stats.length; i++) {
        stats.push(data.stats[i].base_stat)
    }

    return (
        <div className='boxesAb'>
            <h2>{data.name + ' Stats'}</h2>
            <table className='statsTable'
            >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Base</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Speed</td>
                        <td>{stats[0]}</td>
                    </tr>
                    <tr>
                        <td>Special Defense</td>
                        <td>{stats[1]}</td>
                    </tr>
                    <tr>
                        <td>Special Attack</td>
                        <td>{stats[2]}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{stats[3]}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{stats[4]}</td>
                    </tr>
                    <tr>
                        <td>HP</td>
                        <td>{stats[5]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default PokeStats;