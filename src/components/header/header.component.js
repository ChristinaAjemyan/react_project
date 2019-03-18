import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import Users from '../users/user.omponent'
import Points from '../points/points.components'


class Header extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
                <Tab eventKey="users" title="Users">
                    <Users/>
                </Tab>
                <Tab eventKey="points" title="Points">
                   <Points/>
                </Tab>
            </Tabs>
        );
    }
}

export default Header;
