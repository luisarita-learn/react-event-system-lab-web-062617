import React from 'react'
import ReactDOM from 'react-dom'

export default class Keypad extends React.Component {
    
    onKeyUp = () => {
        console.log('Entering password...')
    }
    
    render() {
        return (
            <input type='password' onKeyUp={this.onKeyUp} />
        )
    }
}