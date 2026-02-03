import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
      <div className='inner'>
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App
