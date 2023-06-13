import React from 'react';
import logo from '../../assets/images/logo.jpg';
import './Footer.css'
import { Link } from 'react-router-dom';
import lin from '../../assets/images/lin.png';
import fb from '../../assets/images/fb.png';
import sta from '../../assets/images/sta.png';
import tw from '../../assets/images/tw.png';
import yt from '../../assets/images/yt.png';  

const Footer = () => {
  return (
 <div className='Footer'>
         <div className='footer-logo'>
              <Link to="/" className="col logo">
                 <img src={logo} alt="" />
               </Link> 
         </div>
 <div className='footer-page'>
   <div className='footer-text'>Plan and book your perfect trip with 
          expert advice, travel tips destination
          information from us<br/><br/>
          ©2023 Sead Muhammed. All rights reserved</div>
      <div className='main-links'>
        <div className='ftr-li'>
          <div className='footer-links'>
            <div className='footer-links-1'>
             <h1>links</h1>
             <a href='home'>
              <p>Home</p>
              </a>
              <a href=''>
              <p>About us</p>
               </a>
               <a href=''>
               <p>Services</p>
              </a>
               <a href=''>
               <p></p>
                </a>
                </div>
               <div className='footer-links-2'>
               <h1>Pages</h1>
               <a href=''>
                 <p>Sign up</p>
               </a>
                  <a href='SignIn'>
               <p>Sign in</p>
                </a>
                 <a href=''>
                <p>Terms</p>
                   </a><a href=''>
                  <p>Support</p>
                   </a>
         </div>
                     <div className='footer-links-2'>
          <h1>Booking</h1>
          <a href='hotels'>
            <p>Hotel</p>
            </a>
            <a href=''>
            <p>Flight</p>
            </a>
            <a href='destinations'>
            <p>Destination</p>
            </a>
            <a href=''>
            <p>Cab</p>
            </a>
            </div>
            </div>
            </div>
    </div> 
    </div>

            <div className='footer-li'> 
             <div className='social-media'>
               <p><img src={lin} alt='' /> </p>
               <p> <img src={sta} alt='' /> </p>
               <p> <img src={yt} alt=''/> </p>
               <p> <img src={tw} alt=''/> </p>
                <p> <img src={fb} alt=''/> </p>
               </div>
            
          </div>
        </div>
       
 
  
  )
}

export default Footer;