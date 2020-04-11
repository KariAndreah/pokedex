import React from 'react';
import './PokeImage.css';

const PokeImage = ({ data }) => {

    return (
        <div>
            <div className='boxes'>
                <img className='pokeimage' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="pokelogo"></img>
                <div className='infoBox'>
                    <div className='name'>
                        <h2>{data.name}</h2>
                        <h3>{'  no. ' + data.id}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PokeImage;