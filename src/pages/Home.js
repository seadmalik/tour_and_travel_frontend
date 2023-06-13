import React from 'react'
import { navigate } from 'react'
import './home.css'
import main from '../assets/images/main.jpg'
import imgAB from '../assets/images/imgAb.jpg'
import imgAc from '../assets/images/imgAc.jpg'

import afr from '../assets/images/afr.jpg'
import wtr from '../assets/images/wtr.jpg'
import lala from '../assets/images/lala.jpg'
import mou from '../assets/images/mou.jpg'

const handleClick = () => {
  navigate('/learn');
};

const Home = () => {
  return(
   
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row text">Explore and Travel</div>
            <div className="row"></div>
          </div>
          <div className="col image">
            <img className="image" src={main} alt="" />
          </div>
        </div>
      </div>

      <div className="containerAB">
        <div className="col imgA">
          <img className="imageA" src={imgAB} alt="" />
        </div>
        <div className="txt-one">
        A new way to explore the Ethiopia 
          <p>
            For decades, travelers have relied on Lonely Planet books to plan
            and execute their perfect trips. But now, they can also entrust
            their adventures to Lonely Planet Experiences in Ethiopia.
          </p>
          <button className="lrnM" onClick={handleClick}>
            Learn more
          </button>
        </div>
      </div>
      <div >
<div className='new_cont'>

      <div className="grid-container-A">
            <div className="col imgB">
          <img className="imageAc" src={imgAc} alt="" />
        </div>
        <div className="txt-two">
        Guides by ThousandnSunny
          <p>
          Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.
          </p>
          <button className="lrnM" onClick={handleClick}>
            Learn more
          </button>
        
          </div>
        </div>
    </div>
    </div>
<div>
<div className="container-feauture">
      <h1>Featured destinations</h1>
          <a href='/destinations'>
          <p className='txt-fea'>View All</p>
          </a>
      <div className="grid-container-feauture">     
        <div className='feauture-image' >
          <img className='con1' src={afr} alt='' />
          <img className='con1' src={wtr}  alt=''/>
          <img className='con1' src={lala}  alt=''/>
          <img className='con1' src={mou} alt=''/>  
          </div>     
        </div>
  </div>
</div>
</div>
  
    )
}
export default Home;