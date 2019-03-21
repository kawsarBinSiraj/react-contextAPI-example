

import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {MainProvider} from './components/MainProvider';
import Children from './components/Children';


class App extends Component {
  render() {
    return (
      <MainProvider>
          <Children/>
      </MainProvider>
    );
  }
}

export default App;
