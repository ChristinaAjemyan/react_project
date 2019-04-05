import React, { Component } from 'react';
import {usersData} from '../../data'
import { connect } from 'react-redux';
import { selectUser } from '../../actions/users.actions'



class User extends Component {
  constructor(props){
    super(props)
    this.state={
      users: usersData
    }
  }

  render() {
    return (
      <div className='list_item' onClick={this.props.selectUser.bind(this,this.props.item.id)}>
        <h5>{this.props.item.name}</h5>
        <p>{this.props.item.email}</p>
      </div>
    );
  }
}

export default connect(null, {selectUser})(User);
