import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Destinations from '../pages/Destinations'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/Home'/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/destinations' element={<Destinations/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default Routers