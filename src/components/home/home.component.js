import React, { Component } from 'react';
import UserDetails from '../userDetails/userDetails.component'
import PointDetails from '../pointDetails/pointDetails.component'
import {usersData, pointsData} from '../../data'
import List from '../list/list.component'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            view: 'users',
            users: usersData,
            points: pointsData,
            user: {},
            point: {}
        }
        this.handleSelect = (item, type)=>{
            setTimeout(()=>{
              type==='user'? this.setState({user: item}):this.setState({point:item}) 
            },100)
        }
        this.childList = React.createRef();
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
