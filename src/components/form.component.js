import React, { Component } from 'react';


class Form extends Component {
    render() {
        return (
            <form>
                <input type='text' name='userName'/>
                <input type='password' name='password'/>
            </form>
        );
    }
}

export default Form;
