import React from 'react'
import './Destinations.css'
import Card from '../components/Card'
import data from '../components/data.json'

function Destinations() {
  return (
    <>
    <div className='title'>Discover the best places to visit</div>
    {data.map((card) => (
    <Card key={card.id} title={card.title} country={card.country} description={card.description} imageSrc={card.imageSrc} />
      ))}
    </>
  )
}
export default Destinations
