import React from 'react';
import './PokeAbout.css';

const PokeAbout = ({ data }) => {
    let type = []
    for (let i = 0; i < data.types.length; i++) {
        type.push(data.types[i].type.name)
    }
    type = type.join(', ');

    let height = data.height;
    height = height.toString()
    if (height < 10) {
        height = '0.' + height
    } else {
        height = height[0] + '.' + height[1]
    }

    let weight = data.weight;
    weight = weight.toString()
    if (weight < 10) {
        weight = '0.' + weight
    } else if ((weight > 10) && (weight < 100)) {
        weight = weight[0] + '.' + weight[1]
    } else if (weight > 100) {
        weight = weight[0] + weight[1] + '.' + weight[2]
    }

    let abilities = []
    for (let i = 0; i < data.abilities.length; i++) {
        abilities.push(data.abilities[i].ability.name)
    }
    abilities = abilities.join(', ');

    return (
        <div className='boxesAb'>
            <h2>{data.name + ' Info'}</h2>
            <table className='aboutTable'>
                <tbody>
                    <tr>
                        <td>Types</td>
                        <td>{type}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>{height + ' m'}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{weight + ' kg'}</td>
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        <td>{abilities}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default PokeAbout;

