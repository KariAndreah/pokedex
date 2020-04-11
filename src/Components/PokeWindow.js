import React from 'react';
import './PokeWindow.css';
import logo from '../logo.png';
import PokeImage from './PokeImage';
import PokeAbout from './PokeAbout';
import PokeStats from './PokeStats';



const PokeWindow = ({ data, loaded, about, stats, wrongSpelling }) => {
    if ((loaded === true) && (about === true) && (wrongSpelling === false)) {
        return (
                <div className='pokewindow'>
                    <PokeAbout data={data} />
                </div>
        )
    } else if ((loaded === true) && (stats === true) && (wrongSpelling === false)) {
        return (
                <div className='pokewindow'>
                    <PokeStats data={data} />
                </div>
        )
    } else if ((loaded === true) && (wrongSpelling === false)) {
        return (
                <div className='pokewindow'>
                    <PokeImage data={data} />
                </div>
        )
    } else if (wrongSpelling === true) {
        return (
            <div id='pokewindow'>
                <div className='pokewindow'>
                    <img className='pokeball' src={logo} alt='pokemon'></img>
                </div>
            </div>
        )
    } else {
        return (
            <div id='pokewindow'>
                <div className='pokewindow'>
                    <img className='pokeball' src={logo} alt='pokemon'></img>
                </div>
            </div>
        )
    }

}



export default PokeWindow; 