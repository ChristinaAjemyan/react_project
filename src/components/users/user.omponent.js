import React, { Component } from 'react';
import List from '../list/list.component'




class Users extends Component {
  constructor(props){
    super(props)
    this.handleSelect=props.handleSelect;
    this.state={
      users: [
        {
        id: 1,
        name: "Quinn Dunn",
        email: "egestas@quamafelis.com"
        },
        {
        id: 2,
        name: "Pascale B. Acosta",
        email: "quam@molestieorci.com"
        },
        {
        id: 3,
        name: "Nita Lyons",
        email: "Praesent.eu@Sedmolestie.org"
        },
        {
        id: 4,
        name: "Xandra F. Fleming",
        email: "eget.mollis.lectus@Nunc.net"
        },
        {
        id: 5,
        name: "Leroy H. Mathews",
        email: "ultricies.adipiscing@lobortistellus.com"
        },
        {
        id: 6,
        name: "Honorato Barber",
        email: "ac.mattis.semper@Namporttitor.org"
        },
        {
        id: 7,
        name: "Pearl K. Jackson",
        email: "in.dolor@Utsagittislobortis.co.uk"
        },
        {
        id: 8,
        name: "Unity Y. Strong",
        email: "sapien.Aenean.massa@ipsumporta.com"
        },
        {
        id: 9,
        name: "Cassidy Rivera",
        email: "nisl.Maecenas@scelerisque.com"
        },
        {
        id: 10,
        name: "Omar Ferguson",
        email: "ipsum.primis@nequenon.net"
        }]
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
