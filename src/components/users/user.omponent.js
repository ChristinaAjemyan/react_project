import React, { Component } from 'react';
import List from '../list/list.component'




class Users extends Component {
  constructor(props){
    super(props)
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

  render() {
    return (
      <List list={this.state.users}/>
    );
  }
}

export default Users;
