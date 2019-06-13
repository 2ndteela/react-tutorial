import React, { Component } from 'react';
import './style.css'

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    close() {
        this.props.callback()
    }

    render() { 
        if(!this.props.visible) return null
        return ( 
            <div>
                <div id="dialog-container">
                    <div id="dialog-body">
                        <span id="ex" onClick={() => this.close()}>X</span>
                        {this.props.children}
                        {this.props.visible ? 'yes' : 'no'}
                    </div>
                </div>
                <div id="dialog-screen"></div>
            </div>
         );
    }
}
 
export default Dialog;