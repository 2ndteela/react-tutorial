import React from 'react';
import './style.css'

const Header = (props) => {
    return (
        <div className="header-div">
            <h1>{props.header}</h1>
            <span>{props.subText}</span>
        </div>
    )
}

export default Header