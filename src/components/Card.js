import React from 'react'
import icon from "../images/icon.png"

const Card = ({title}) => {
    return (
        <div className="card">
            <img src={icon} alt="icon" />
            <h6>{title}</h6>
            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        </div>
    )
}

export default Card
