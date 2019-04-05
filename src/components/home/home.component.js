import React, { Component } from 'react';
import UserDetails from '../userDetails/userDetails.component'
import PointDetails from '../pointDetails/pointDetails.component'
import {usersData, pointsData} from '../../data'
import List from '../list/list.component'
import RequestService from '../../requests'


class Home extends Component {
    constructor(props){
        super(props);
        this.requestService= new RequestService()
        this.state={
            view: 'users',
            users: usersData,
            points: pointsData,
            user: {},
            point: {}
        }
        this.handleSelect = (item, type)=>{
           console.log(item.id)
           if(type==="user"){
                this.requestService.getUserById(item.id)
                    .then(res=>{
                        this.setState({user:res.data[0]})
                    })
           }else {
                this.requestService.getPointById(item.id)
                .then(res=>{
                    this.setState({point:res.data[0]})
                })
           }
           
        }
        this.childList = React.createRef();
        this.requestService.getUsers()
            .then(res=>{
              this.setState({users: res.data})
            })
        this.requestService.getPoints()
            .then(res=>{
              this.setState({points: res.data})
            })
    }
    changeView(v){
        this.setState({view: v})
    }
    saveUserInfo(user, e){
        e.preventDefault()
        this.childList.current.changeUserInfo(user)
    }
    savePointInfo(user, e){
        e.preventDefault()
        this.childList.current.changePointInfo(user)
    }
    deleteUser(userId, e){
        e.preventDefault()
        this.childList.current.deleteUser(userId)
    }
    deletePoint(id, e){
        e.preventDefault()
        this.childList.current.deletePoint(id)
    }
   
    render() {
        return (
              <div className="main">
                 {this.state.view==="users" && (
                    <div className="row">
                        <div className="col-md-3">
                            <List ref={this.childList} type={'Users'} handleSelect={this.handleSelect} users={this.state.users}/>
                        </div>
                        <div className="col-md-9">
                            <UserDetails user={this.state.user} saveUserInfo={this.saveUserInfo.bind(this)} deleteUser={this.deleteUser.bind(this)}/>
                        </div>
                    </div>)}
                 {this.state.view==="points" && (
                    <div className="row">
                        <div className="col-md-4">
                            <List ref={this.childList} type={'Points'}  handleSelect={this.handleSelect} users={this.state.users} points={this.state.points}/>
                        </div>
                        <div className="col-md-8">
                            <PointDetails point={this.state.point} savePointInfo={this.savePointInfo.bind(this)} deletePoint={this.deletePoint.bind(this)}/>
                        </div>
                    </div>)}        
              </div>
        );
    }
}

export default Home;
