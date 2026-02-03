import React from 'react'
import "./css/Aside.css"

function Aside() {
  const asideMenu = [
    { label: "links 1", path: "#" },
    { label: "links 2", path: "#" },
    { label: "links 3", path: "#" },
    { label: "links 4", path: "#" },
    { label: "links 5", path: "#" },
    { label: "links 6", path: "#" }
  ];
  return (
    <aside>
      <h2>{'<'}ASIDE{'>'}Section</h2>
      <ul>
        {asideMenu.map((aside, i)=>(
          <li key={i}>
            <a href={aside.path}></a>
            <label htmlFor="">{aside.label}</label>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Aside