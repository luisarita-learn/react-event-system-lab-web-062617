import React from 'react'
import ReactDOM from 'react-dom'

export default class Tickler extends React.Component {
    
    focus = () => {
        console.log('Good!');
    }

    blur = () => {
        console.log('Hey! Eyes on me!');
    }
    
    render() {
        return (
            <button onFocus={this.focus} onBlur={this.blur}>Button Text</button>
        );
    }
}