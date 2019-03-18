import React, { Component } from 'react';


class PointDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            point: Object.assign({},props.point,)
        }   
        this.savePointInfo = props.savePointInfo  
        this.deletePoint = props.deletePoint  
    }
    componentWillReceiveProps(nextProps) {
        this.setState({point: nextProps.point})
    }
    handleChange(e){
        this.setState({point: Object.assign(this.state.point, {[e.target.name]: e.target.value})}) 
    }
    
    render() {
        return (
            <div className="user-details">
                {this.props.point.name && <h3>Edit Point <button className='btn btn-danger delete-button' onClick={this.deletePoint.bind(this, this.state.point.id)}>Delete Point</button></h3>}
                {!this.props.point.name && <h3>Add Point</h3>}
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
                            <input type="text" value={this.state.point.date || ''} onChange={this.handleChange.bind(this)} className="form-control" id="date" name="date" placeholder="Enter Date" required/>
                        </div>
                        <button type="submit" className="btn btn-primary user-save">Save</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default PointDetails;
