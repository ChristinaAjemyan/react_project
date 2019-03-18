import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header/>
        </div>
      </div>
    );
  }
}

export default App;
