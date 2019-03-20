import React, { Component } from 'react';
import { usersData } from '../../data';


class PointDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            point: Object.assign({},props.point),
            users: usersData
        }
        this.savePointInfo = props.savePointInfo  
        this.deletePoint = props.deletePoint;
        this.options = this.state.users.map((el,index)=>{
          return <option key={index} value={el.id}>{el.name}</option>
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({point: nextProps.point})
        let date = new Date(+nextProps.point.date)
        this.setState({
            point: Object.assign({},nextProps.point, {date: `${date.getFullYear()}-${date.getMonth()<9?'0'+(date.getMonth()+1):date.getMonth()+1}-${date.getDate()}`})
        })
        console.log(nextProps.point.date,`${date.getFullYear()}-${date.getMonth()<9?'0'+(date.getMonth()+1):date.getMonth()+1}-${date.getDate()}`)
        
      
    }
    handleChange(e){
        this.setState({point: Object.assign(this.state.point, {[e.target.name]: e.target.value})}) 
    }

    render() {
        return (
            <div className="user-details">
                {this.props.point.country && <h3>Edit Point <button className='btn btn-danger delete-button' onClick={this.deletePoint.bind(this, this.state.point.id)}>Delete Point</button></h3>}
                {!this.props.point.country && <h3>Add Point</h3>}
                <div className="col-md-6 offset-3">
                    <form className='user-form' onSubmit={this.savePointInfo.bind(this, this.state.point)}>
                       <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input type="text" value={this.state.point.country || ''} onChange={this.handleChange.bind(this)} className="form-control" id="country" name="country" placeholder="Enter Name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="region">Region</label>
                            <input type="text" value={this.state.point.region || ''} onChange={this.handleChange.bind(this)} className="form-control" id="region" name="region" placeholder="Enter Region" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" value={this.state.point.city || ''} onChange={this.handleChange.bind(this)} className="form-control" id="city" name="city" placeholder="Enter City" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="street">Street</label>
                            <input type="text" value={this.state.point.street || ''} onChange={this.handleChange.bind(this)} className="form-control" id="street" name="street" placeholder="Enter Street" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="geo">Geo Location</label>
                            <input type="text" value={this.state.point.geo || ''} onChange={this.handleChange.bind(this)} className="form-control" id="geo" name="geo" placeholder="Enter Geolocation" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="date" value={this.state.point.date || ''} onChange={this.handleChange.bind(this)} className="form-control" id="date" name="date" placeholder="Enter Date" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user">User</label>
                            <select className="form-control" value={this.state.point.userid} onChange={this.handleChange.bind(this)} id="user" name="userid">
                                {this.options}
                            </select>    
                        </div>
                        <button type="submit" className="btn btn-primary user-save">Save</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default PointDetails;
