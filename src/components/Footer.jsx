import React from 'react'
import "./css/footer.css"
function Footer() {
  const footerMenu = [
    { label: "contact us", path: "/contact" },
    { label: "affiliates", path: "/affiliates" },
    { label: "help", path: "/help" },
    { label: "follow us", path: "/follow" }
  ]
  return (
    <footer>
      <h2>{"<Footer> Section"}</h2>
      <nav >
        <ul className='navlst'>
          {footerMenu.map((foot, i) => (
            <li key={i}>
              <a href={foot.path}>
                <label htmlFor={foot.label}>{foot.label}</label>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer