import React, { Component } from 'react';


class UserDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: Object.assign({},props.user,)
        }   
        this.saveUserInfo = props.saveUserInfo  
        this.deleteUser = props.deleteUser  
    }
    componentWillReceiveProps(nextProps) {
        this.setState({user: nextProps.user})
    }
    handleChange(e){
        this.setState({user: Object.assign(this.state.user, {[e.target.name]: e.target.value})}) 
    }
    
    render() {
        return (
            <div className="user-details">
                {this.props.user.name && <h3>Edit User <button className='btn btn-danger delete-button' onClick={this.deleteUser.bind(this, this.state.user.id)}>Delete User</button></h3>}
                {!this.props.user.name && <h3>Add User</h3>}
                <div className="col-md-6 offset-3">
                    <form className='user-form' onSubmit={this.saveUserInfo.bind(this, this.state.user)}>
                       <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" value={this.state.user.name || ''} onChange={this.handleChange.bind(this)} className="form-control" id="name" name="name" placeholder="Enter Name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" value={this.state.user.email || ''} onChange={this.handleChange.bind(this)} className="form-control" id="email" name="email" placeholder="Email" required/>
                        </div>
                        <button type="submit" className="btn btn-primary user-save">Save</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default UserDetails;
