import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Destinations from '../pages/Destinations'
import Edit from '../pages/Edit'
import VeiwData from '../pages/VeiwData'
import Hotels from '../pages/Hotels'
import SignIn from '../components/SignIn'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/Home'/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/destinations' element={<Destinations/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/veiwdata" element={<VeiwData/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/edit/:id" component={Edit} />
     </Routes>
  )
}

export default Routers