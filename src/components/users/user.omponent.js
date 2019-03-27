import React, { Component } from 'react';
import {usersData} from '../../data'




class User extends Component {
  constructor(props){
    super(props)
    this.handleSelect=props.handleSelect;
    this.state={
      users: usersData
    }
  }

  render() {
    return (
      <div className='list_item' onClick={this.handleSelect.bind(this, this.props.item,'user')}>
        <h5>{this.props.item.name}</h5>
        <p>{this.props.item.email}</p>
      </div>
    );
  }
}

export default User;
