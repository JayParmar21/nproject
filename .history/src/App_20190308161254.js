import React, { Component } from 'react';
import {Provider} from 'react-redux'

import DisplayPlayer from './views/DIsplayPlayer/DisplayPlayer'
import store from './store'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <DisplayPlayer />
      </div>
    );
  }
}

export default App;
