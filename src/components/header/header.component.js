import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'

class Header extends Component {
    constructor(props){
        super(props);
        this.handleClick=props.handleClick
    }
    
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Nav.Link onClick={this.handleClick.bind(this, 'users')}>Users</Nav.Link>
                <Nav.Link  onClick={this.handleClick.bind(this, 'points')}>Points</Nav.Link>
            </Navbar>
        );
    }
}

export default Header;
