import React from 'react'
import "./css/Nav.css"

function Nav() {
    const navList = {
        title: "Main Navigation",
        items: [
            { label: "page 2", path: "/page2" },
            { label: "page 3", path: "/page3" },
            { label: "page 4", path: "/page4" },
            { label: "page 5", path: "/page5" },
            { label: "page 6", path: "/page6" }
        ]
    };
    return (
        <nav>
            navigation links
            <ul className='navlst'>
                {navList.items.map((nav, i) => (
                    <li key={i}>
                        <a href={nav.path}>{nav.label}</a>
                    </li>
                ))}
            </ul>
        </nav >
    )
}

export default Nav