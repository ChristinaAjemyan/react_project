import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header.component'
import Home from './components/home/home.component'

class App extends Component {
  constructor(prop){
    super(prop);
    this.child = React.createRef();
  }
  handleClick(view){
    this.child.current.changeView(view)
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header handleClick={this.handleClick.bind(this)}/>
          <Home ref={this.child}/>
        </div>
      </div>
    );
  }
}

export default App;
