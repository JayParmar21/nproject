import React, { Component } from 'react';
import { Provider } from 'react-redux'

import DisplayPlayer from './views/DIsplayPlayer/DisplayPlayer'
import store from './store'
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <DisplayPlayer />
        </div>
      </Provider>
    );
  }
}

export default App;
