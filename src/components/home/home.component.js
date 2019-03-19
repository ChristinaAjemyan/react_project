import React, { Component } from 'react';
import Users from '../users/user.omponent'
import Points from '../points/points.components'
import UserDetails from '../userDetails/userDetails.component'
import PointDetails from '../pointDetails/pointDetails.component'


class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            view: 'users',
            user: {},
            point: {}
        }
        this.handleSelect = (item, type)=>{
            setTimeout(()=>{
              type==='user'? this.setState({user: item}):this.setState({point:item}) 
            },100)
        }
        this.childUser = React.createRef();
        this.childPoint = React.createRef();
    }
    changeView(v){
        this.setState({view: v})
    }
    saveUserInfo(user, e){
        e.preventDefault()
        this.childUser.current.changeUserInfo(user)
    }
    savePointInfo(user, e){
        e.preventDefault()
        this.childPoint.current.changePointInfo(user)
    }
    deleteUser(userId, e){
        e.preventDefault()
        this.childUser.current.deleteUser(userId)
    }
    deletePoint(id, e){
        e.preventDefault()
        this.childPoint.current.deletePoint(id)
    }
   
    render() {
        return (
              <div className="main">
                 {this.state.view==="users" && (
                    <div className="row">
                        <div className="col-md-3">
                            <Users ref={this.childUser} handleSelect={this.handleSelect}/>
                        </div>
                        <div className="col-md-9">
                            <UserDetails user={this.state.user} saveUserInfo={this.saveUserInfo.bind(this)} deleteUser={this.deleteUser.bind(this)}/>
                        </div>
                    </div>)}
                 {this.state.view==="points" && (
                    <div className="row">
                        <div className="col-md-4">
                            <Points ref={this.childPoint} handleSelect={this.handleSelect}/>
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
