import React from 'react'
import "./css/Header.css"
import Nav from "./Nav.jsx"

function Header() {

  return (
    <header>
        <h1>Site Name</h1>
        <div className='nav-section'>
            <h2>&lt;HEADER&gt;SECTION</h2>
            {/* <h2>{"<"}HEADER{">"}SECTION</h2> */}
            <Nav/>
        </div>
    </header>
  )
}

export default Header