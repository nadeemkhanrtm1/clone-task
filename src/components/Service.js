import React from 'react'
import Card from "./Card"

const Service = () => {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="sr-row-1">
        <Card title="Breake fast"/>
        <Card title="Garden"/>
        <Card title="Pool"/>
      </div>
      <div className="sr-row-2">
        <Card title="Free Wifi"/>
        <Card title="Daily HouseKeeping"/>
        <Card title="In-Room Dining Service"/>
      </div>
    </div>
  )
}

export default Service
