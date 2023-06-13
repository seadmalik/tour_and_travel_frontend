import React from 'react'
import './Destinations.css'

import data from '../components/data.json'
import { useNavigate } from 'react-router-dom'




function Destinations() {
  const navigate = useNavigate();

  
const handleClick = () => {
  navigate('/edit');}
  
  return (
    <>
       <div className="place-grid">
      <div className='title'>Discover the best places to visit</div>
   
      <div className="grid-container-1">
      {data.map(place => (
        <div key={place.src}>
          <img className='img-holder-1' src={place.imageSrc} alt={place.title} />
          <div className='overlay'/>
          <p className='country-name-1'>{place.country}</p>
          <h3 className='country-title-1'>{place.title}</h3>
          <p className='hotel-des1'>{place.description}</p>
        </div>
      ))}
      
    </div>
    </div>
      <div className="EditBut col row">
            <button className='add-a' onClick={handleClick}>Add</button>
            <button className='add-a' onClick={handleClick}>Delete</button>
      </div>
    </>
  )
}
export default Destinations
