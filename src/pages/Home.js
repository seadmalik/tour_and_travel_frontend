import React from 'react'
import './home.css'
import main from '../assets/images/main.jpg'



const Home = () => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='row text'>Explore and Travel</div>
        <div className='row'></div>
      </div>
      <div className='col image'><img className='image' src={main}/></div>  
    </div>
  )
}

export default Home