import React from 'react';

import Hoteldata from '../components/Hoteldata.json'
import './Hotels.css'
function ImageGrid() {

  return (
    <div className="image-grid">
      <div className='title'>Hotels to Visit</div>
   
      <div className="grid-container">
      {Hoteldata.map(hotel => (
        <div key={hotel.src}>
          <img className='img-holder' src={hotel.hotel_image} alt={hotel.title} />
          <p className='country-name'>{hotel.hotel_name}</p>
          <h3 className='hotels-name'>{hotel.hotel_location}</h3>
          <p className='hotel-desc'>{hotel.hotel_desc}</p>
          <p className='hotel-price'>{hotel.hotel_price}</p>   
        </div>
      ))}
    </div>
    </div>
  );
}

export default ImageGrid;