import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import Users from '../users/user.omponent'


class Header extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
                <Tab eventKey="users" title="Users">
                    <Users/>
                </Tab>
                <Tab eventKey="points" title="Points">
                   bbb
                </Tab>
            </Tabs>
        );
    }
}

export default Header;
