import React, { Component } from 'react';
import './Gameboy.css';
import PokeSearch from './PokeSearch';
import PokeWindow from './PokeWindow';

class Gameboy extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            data: [],
            type: ' ',
            image: [],
            loaded: false,
            about: false,
            stats: false,
            wrongSpelling: false
        }
    }
    getSearch = (event) => {
        this.setState({ value: event.target.value });
    }

    onFetchData = (input) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
            .then((response) =>
                response.json())
            .then((data) => {
                this.setState({ data: data })
            })
            .catch(() => {
                console.log('wrong spelling')
                this.setState({ wrongSpelling: true })
            })

        this.setState({ loaded: true });
        this.setState({ about: false });
        this.setState({ stats: false });
    }


    onButtonSubmit = () => {
        if (this.state.value === '') {
            this.setState({wrongSpelling:true});
            console.log('Empty Search Field')
        } else {
            this.onFetchData(this.state.value.toLowerCase());
            this.setState({wrongSpelling:false});
        }
    }

    enterKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.onButtonSubmit();
        }
    }

    onAboutButton = () => {
        this.setState({ about: true });
        this.setState({ stats: false });
    }

    onStatsButton = () => {
        this.setState({ stats: true });
        this.setState({ about: false });
    }

    onUpButton = () => {
        if ((this.state.wrongSpelling === false)&&(this.state.value === '')) {
            this.onFetchData(this.state.data.id + 1 || 1);
            this.setState({wrongSpelling:false});
        } else {
            this.onFetchData(this.state.data.id + 1);
            this.setState({wrongSpelling:false});
        }
    }

    onDownButton = () => {
        if (this.state.wrongSpelling === true) {
            console.log('Empty Search Field')
            this.setState({wrongSpelling:true});
        } else {
            this.onFetchData(this.state.data.id - 1);
            this.setState({wrongSpelling:false});
        }
    }

    render() {
        const { data, loaded, stats, about, wrongSpelling,} = this.state;
        return (
            <div id='gameboy'>
                <div className='gameboy'>
                    <div className='row'>
                        <PokeWindow data={data}
                            loaded={loaded}
                            about={about}
                            stats={stats}
                            wrongSpelling={wrongSpelling}
                        />
                    </div>
                    <div className='row'>
                        <PokeSearch
                            getSearch={this.getSearch}
                            onButtonSubmit={this.onButtonSubmit}
                            enterKeyDown={this.enterKeyDown}
                            onAboutButton={this.onAboutButton}
                            onStatsButton={this.onStatsButton}
                            onUpButton={this.onUpButton}
                            onDownButton={this.onDownButton}
                             />
                    </div>
                </div >
            </div>
        )
    }
}


export default Gameboy; 