import React, { Component } from 'react';
import User from "../users/user.omponent"
import Points from "../points/points.components"



class List extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedUser: undefined,
      filteredPoints: props.points,
      points: props.points,
      users: props.users
    }
    this.handleSelect = props.handleSelect
  }
  selectUser(e){
    let value = e.target? e.target.value: e;
    this.setState({selectedUser: value})
    if(value==='undefined'){
      this.setState({filteredPoints: this.props.points})
    }else{
      let arr = this.props.points.filter(el => {
      if(+el.userid===+value){
        return el
      }})
    this.setState({filteredPoints: arr})
    }
    
  }
  changePointInfo(point){
    let points;
    point.date=new Date(point.date).getTime()
    if(this.state.points.find(el => el.id===point.id)){
      points=this.state.points.map(e=> e.id===point.id? e=point: e)
    }else {
      point['id']= this.state.points.length+1
      this.state.points.push(point)
      points=this.state.points
    }
    this.setState({filteredPoints: points})
    if(this.state.selectedUser && this.state.selectedUser!=="undefined"){
      this.selectUser(this.state.selectedUser)
    }
  }
  deletePoint(id){
    this.state.points.splice(this.state.points.findIndex(el => el.id===id),1)
    this.setState({points: this.state.points})
    this.handleSelect({},'point')
    if(this.state.selectedUser && this.state.selectedUser!=="undefined"){
      this.selectUser(this.state.selectedUser)
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
        <div className={this.props.type==='Points'?"col-md-5":"col-md-6"}>
          <p className="m-2">Select from {this.props.type}</p>
        </div>
        {this.props.type==='Points' && 
          <div className="col-md-4">
            <select className="form-control" value={this.state.selectedUser} onChange={this.selectUser.bind(this)}>
            <option value="undefined">Select User</option>
            {this.props.users.map((el,index)=>
               <option key={index} value={el.id}>{el.name}</option>
            )}
            </select>
          </div>
        }
        <div className={this.props.type==='Points'?"col-md-3 p-0":"col-md-6"}>
          <button className="btn btn-success px-2" onClick={this.handleSelect.bind(this,{},this.props.type)}>Add {this.props.type}</button>
        </div>
      </div>
      { this.props.type==="Users" && 
        this.state.users.map((el,key)=> 
         <User key={key} item={el} handleSelect={this.handleSelect}/>
        )
      }
      {
        this.props.type==='Points' && 
        this.state.filteredPoints.map((el,key)=> 
       <Points key={key} item={el} handleSelect={this.handleSelect}/>
      )
      }
    </div>
    );
  }
}

export default List;
