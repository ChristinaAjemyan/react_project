import React, { Component } from 'react';



class List extends Component {
  constructor(props){
    super(props);
    this.handleUserSelect = props.onUserSelect
    this.handlePointSelect = props.onPointSelect
    this.createList(props)
  }
  createList(data){
    if(data.users){
      this.listItems = data.users.map((item,index)=> <li key={index} onClick={this.handleUserSelect.bind(this,item, 'user')}>{item.name}</li>)
    }else if(data.points) {
      this.listItems = data.points.map((item,index)=> <li key={index} onClick={this.handlePointSelect.bind(this,item,'point')}>{item.country}</li>)
    }
  }
  componentWillReceiveProps(nextProps) {
    this.createList(nextProps)
  }
  render() {
    return (
      <ul>
        {this.listItems}
      </ul>
    );
  }
}

export default List;
