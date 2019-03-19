import React, { Component } from 'react';
import List from '../list/list.component'
import {usersData} from '../../data'




class Users extends Component {
  constructor(props){
    super(props)
    this.handleSelect=props.handleSelect;
    this.state={
      users: usersData
    }
  }

  changeUserInfo(user){
    let users;
    if(this.state.users.find(el => el.id===user.id)){
      users=this.state.users.map(e=> e.id===user.id? e=user: e)
    }else {
      user['id']= this.state.users.length+1
      this.state.users.push(user)
      users=this.state.users
    }
    this.setState({users: users})
  }
  deleteUser(id){
    this.state.users.splice(this.state.users.findIndex(el => el.id===id),1)
    this.setState({users: this.state.users})
    this.handleSelect({},'user')
  }
  render() {
    return (
      <div className="lists">
        <div className="row">
          <div className="col-md-6">
            <p className="m-2">Select from Users</p>
          </div>
          <div className="col-md-6">
            <button className="btn btn-success px-4" onClick={this.handleSelect.bind(this,{},'user')}>Add User</button>
          </div>
        </div>
          
        <List users={this.state.users} onUserSelect={this.handleSelect}/>
      </div>
    );
  }
}

export default Users;
