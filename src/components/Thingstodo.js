import React from 'react';
import Model from "./Model";
import icon from "../images/upper-coma.webp";

const Thingstodo = () => {
  return (
    <div className="thingstodo-container">
      <h1>thing to do</h1>
      <div className="model-row-1">
        <Model title="Wineries Tour"/>
        <Model title="Cultural Sites"/>
        <Model title="Market Tour"/>
      </div>
      <div className="model-row-2">
        <Model title="Leisure Activities"/>
        <Model title="Birds Safari"/>
        <Model title="Horse Riding "/>
      </div>
      <div className="img3">
        <div>
          <h4>GUEST REVIEW</h4>
          <img src={icon} alt=""/>
          <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great
            place for you to tell a story and let your users know a little more about you.”
          </p>
        </div>
      </div>
    </div>
  )
}

export default Thingstodo
