import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts'
import { Provider } from 'react-redux';
import store from './Store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
