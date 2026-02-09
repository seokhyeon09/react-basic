import axios from 'axios'
import React, {useState, useEffect, useMemo} from 'react'

const DummyJson = () => {
    const [carts, setCarts] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/carts')
            .then((res)=>{
                setCarts(res.data.carts.slice(0,10))
            })
    },[])
  return (
    <div>
        <h2>Dummy Json</h2>
        <ul>
            {carts.map((c)=>(
                <li key={c.id}>{c.products.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default DummyJson