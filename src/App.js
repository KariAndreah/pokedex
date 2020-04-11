import React, {Component} from 'react';
import './App.css';
import Gameboy from './Components/Gameboy';


class App extends Component {
  render() {

    return (
      <div className ='App'>
          <Gameboy />      
      </div>

    );
  }
} 

export default App;