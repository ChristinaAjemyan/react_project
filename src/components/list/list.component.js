import React, { Component } from 'react';



class List extends Component {
  constructor(props){
    super(props);
    console.log(props)
    if(props.list){
      this.listItems = props.list.map((item,index)=> <li key={index}>{item.name}</li>)
    }else if(props.points) {
      this.listItems = props.points.map((item,index)=> <li key={index}><a>{item.country}</a></li>)
    }
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
