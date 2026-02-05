import React from 'react'

function InputCard({title, placeholder}) {
  return (
    <div>
        <h2>{title}</h2>
        <input type="text" placeholder={placeholder}/>
        <button>Click</button>
    </div>
  )
}

export default InputCard