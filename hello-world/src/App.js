import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
          <img src={logo} className="App-logo1" alt="logo" />
          </div>
          <div><img src={logo} className="App-logo2" alt="logo" />
          </div>
          <h2>Welcome to Seetaram yadav Website</h2>
        </div>
        <p className="App-intro">
          <img src="https://scontent.xx.fbcdn.net/v/t31.0-8/14188117_891473884290558_4508372132083533444_o.jpg?oh=c104af58ec86df0fe028dd546bfff8db&oe=58EB7B46" alt="logo"/>
        </p>
      </div>
    );
  }
}

export default App;
