import { useState } from 'react'
import './App.css'
import Header from './compoenents/Header'
import Section from './compoenents/Section'
import Foot from './compoenents/Footer'
import Navigation from './compoenents/Nav'
import Acle from './compoenents/Article'
import Aside from './compoenents/Aside'
import Content from './compoenents/Content'

function App() {
  return (
    <div className='main-box'>
      <Header />
      <Navigation />
      <div className='inner'>
        <div>
          <Section />
          <Acle/>
          <div className="cardlist">
            <Content/>
          </div>
        </div>
        <Aside/>
      </div>
      <Foot />
    </div>
  )
}

export default App
