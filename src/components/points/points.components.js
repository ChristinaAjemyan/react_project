import React, { Component } from 'react';
import List from '../list/list.component'
import {pointsData, usersData} from '../../data'




class Points extends Component {
  constructor(props){
    super(props)
    this.handleSelect=props.handleSelect;
    this.state={
      points: pointsData,
      users: usersData,
      selectedUser: undefined
    }
    setTimeout(()=>{
      this.setState({filteredPoints: this.state.points})
    },100)
    this.options = this.state.users.map((el,index)=>{
      return <option key={index} value={el.id}>{el.name}</option>
    })
  }
  selectUser(e){
    let value = e.target? e.target.value: e;
    this.setState({selectedUser: value})
    if(value==='undefined'){
      this.setState({filteredPoints: this.state.points})
    }else{
      let arr = this.state.points.filter(el => {
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
    this.setState({points: points})
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

  render() {
    return (
      <div className="lists">
        <div className="row">
          <div className="col-md-5">
            <p className="m-2">Select from Points</p>
          </div>
          <div className="col-md-4">
            <select className="form-control" value={this.state.selectedUser} onChange={this.selectUser.bind(this)}>
            <option value="undefined">Select User</option>
             {this.options}
            </select>
          </div>
          <div className="col-md-3 p-0">
            <button className="btn btn-success px-2" onClick={this.handleSelect.bind(this,{},'point')}>Add Point</button>
          </div>
        </div>
          
        <List points={this.state.filteredPoints} onPointSelect={this.handleSelect}/>
      </div>
    );
  }
}

export default Points;
