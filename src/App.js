import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Routers from './router/Routers'
import './App.css'

function App() {
  return (
    <div className='app'>
        <Header/>
        <Routers/>
        <Footer/>
    </div>
  )
}

export default App