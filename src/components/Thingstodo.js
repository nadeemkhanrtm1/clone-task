import React, {useState} from 'react';
import Model from "./Model";
import icon from "../images/upper-coma.webp";
import {BsDot} from "react-icons/bs";

const Thingstodo = () => {

  const para = [
    "“I\'m a paragraph. Click here to add your own text and edit me.”", '“I\'m a testimonial. Click to edit me and add text that says something nice abou' +
        't you and your services.”',
    '“I\'m a paragraph. Click here to add your own text and edit me. I’m a great plac' +
        'e for you to tell a story and let your users know a little more about you.”'
  ]

  const [paragraph,
    setParagraph] = React.useState(para[0])

  React.useEffect(() => {
    setInterval(() => {
      setParagraph((value) => (value === para[0]
        ? para[1]
        : value === para[2]
          ? para[1]
          : para[2]))
    }, 2000)
  }, [])

  const color = (paragraph===para[0]) ? 'rgba(1,1,1,0.5)' : 'black';
  const color1 = (paragraph===para[1]) ? 'rgba(1,1,1,0.5)' : 'black';
  const color2 = (paragraph===para[2]) ? 'rgba(1,1,1,0.5)' : 'black';
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
          <p>{paragraph}
          </p>
            <BsDot style={{fontSize:'2rem',color:`${color}`}}/>
            <BsDot style={{fontSize:'2rem',color:`${color1}`}}/>
            <BsDot style={{fontSize:'2rem',color:`${color2}`}}/>
        </div>
      </div>
    </div>
  )
}

export default Thingstodo
