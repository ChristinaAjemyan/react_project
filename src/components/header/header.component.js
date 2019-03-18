import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import Users from '../users/user.omponent'
import Points from '../points/points.components'
import UserDetails from '../userDetails/userDetails.component'
import PointDetails from '../pointDetails/pointDetails.component'


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            user: {},
            point: {}
        }
        this.handleSelect = (item, type)=>{
            setTimeout(()=>{
              type==='user'? this.setState({user: item}):this.setState({point:item}) 
            },100)
        }
        this.childUser = React.createRef();
    }
    saveUserInfo(user, e){
        e.preventDefault()
        this.childUser.current.changeUserInfo(user)
    }
    savePointInfo(user, e){
        e.preventDefault()
        this.childPoint.current.changeUserInfo(user)
    }
    deleteUser(userId, e){
        e.preventDefault()
        this.childUser.current.deleteUser(userId)
    }
    deletePoint(userId, e){
        e.preventDefault()
        this.childPoint.current.deleteUser(userId)
    }
    
    render() {
        return (
            <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
                <Tab eventKey="users" title="Users">
                    <div className="main">
                        <div className="row">
                            <div className="col-md-3">
                                <Users ref={this.childUser} handleSelect={this.handleSelect}/>
                            </div>
                            <div className="col-md-9">
                                <UserDetails user={this.state.user} saveUserInfo={this.saveUserInfo.bind(this)} deleteUser={this.deleteUser.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="points" title="Points">
                    <div className="main">
                        <div className="row">
                            <div className="col-md-4">
                                <Points ref={this.childPoint} handleSelect={this.handleSelect}/>
                            </div>
                            <div className="col-md-8">
                                <PointDetails point={this.state.point} savePointInfo={this.savePointInfo.bind(this)} deletePoint={this.deletePoint.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}

export default Header;
