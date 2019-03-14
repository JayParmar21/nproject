import React, { Component } from 'react';


import DisplayPlayer from './views/DIsplayPlayer/DisplayPlayer'

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
