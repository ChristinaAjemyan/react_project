import React, { Component } from 'react';


class Form extends Component {
    render() {
        return (
            <form>
                <input type='text' name='name'/>
                <input type='text' name='email'/>
            </form>
        );
    }
}

export default Form;
