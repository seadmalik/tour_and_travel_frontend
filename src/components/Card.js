import React from 'react'
import './Card.css'

function Card({ title, country, description, imageSrc }) {
  return (
    <>
    <div className='card-holder'>
        <div>
            <img className='img-holder'src={imageSrc} alt={title}/>
            <div className='overlay'>
                <h2 className='title'>{title},{country}</h2>
                <p className='description'>{description}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card
