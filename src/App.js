import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header.component';
import Home from './components/home/home.component';
import { Provider } from 'react-redux';
import store from './store.js';


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
      <Provider store={store}>
          <div className="App">
            <div className="container-fluid">
              <Header handleClick={this.handleClick.bind(this)}/>
              <Home ref={this.child}/>
            </div>
          </div>
      </Provider>
    
    );
  }
}

export default App;
