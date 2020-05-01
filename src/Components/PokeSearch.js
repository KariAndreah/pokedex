import React from 'react';
import './PokeSearch.css'
import logo from '../plus4.png';

const PokeSearch = ({ onButtonSubmit, getSearch, onAboutButton, onStatsButton, onUpButton, onDownButton, enterKeyDown }) => {


    return (
        <div id="PokeSearch">
            <div className="PokeSearch">
                <div className='searchBox'>
                    <input type='search' placeholder={'Name or number'} 
                        onChange={getSearch} onKeyDown={enterKeyDown} />
                    <button className = 'searchButton' onClick={() => {
                        onButtonSubmit();
                    }}>Search</button>
                </div>
                <div className='rowButtons'>
                    <div className='section'>
                        <img className='plusButton' src={logo} alt='pokeImage'></img>
                    </div>
                    <div className='section'>
                        <div className='bottomButtons'>
                            <button className='aboutButton' onClick={() => {
                                onAboutButton();
                            }}></button>
                            <button className='statsButton' onClick={() => {
                                onStatsButton();
                            }}></button>
                            <div >
                                <p className = 'labels'>About</p>
                                <p className = 'labels'>Stats</p>
                            </div>
                        </div>
                    </div>
                    <div className='section'>
                        <div className="changeButtons">
                            <div>
                                <button className='upButton' onClick={() => {
                                    onUpButton();
                                }}>Up</button>
                            </div>
                            <div>
                                <div>
                                    <button className='downButton' onClick={() => {
                                        onDownButton();
                                    }}>Down</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PokeSearch;

