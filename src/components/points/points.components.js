import React, { Component } from 'react';
import {pointsData, usersData} from '../../data'




class Points extends Component {
  constructor(props){
    super(props)
    this.handleSelect=props.handleSelect;
    this.state={
      points: pointsData,
      users: usersData,
      selectedUser: undefined
    }
    setTimeout(()=>{
      this.setState({filteredPoints: this.state.points})
    },100)
  }
  


  render() {
    return (
        <div className='list_item' onClick={this.handleSelect.bind(this,this.props.item,"point")}>
          <h5>{this.props.item.country}</h5>
          <p>{this.props.item.region}, {this.props.item.city}, {this.props.item.street}</p>
        </div>
     );
  }
}

export default Points;
