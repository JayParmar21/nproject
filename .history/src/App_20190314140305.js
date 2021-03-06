import React, { Component } from 'react';


import DisplayPlayer from './views/DIsplayPlayer/DisplayPlayer'

import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
    </Provider>
      <div>
        <DisplayPlayer />
      </div>
    );
  }
}

export default App;
