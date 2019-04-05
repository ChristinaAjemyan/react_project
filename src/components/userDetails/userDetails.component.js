import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users.actions'
import RequestService from '../../requests'


class UserDetails extends Component {
    constructor(props){
        super(props);
        this.requestService= new RequestService()
        this.state = {
            user: Object.assign({},props.user,)
        }   
        this.saveUserInfo = props.saveUserInfo  
        this.deleteUser = props.deleteUser  
    }
    componentWillMount(){
       
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.id){
            this.requestService.getUserById(nextProps.id)
                .then(res=>{
                    this.setState({user: res.data[0]})
                })
        }
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

const mapStateToProps = state => ({
    user: state.users.user,
    id: state.users.userId
})

export default connect(mapStateToProps, {fetchUser})(UserDetails);
