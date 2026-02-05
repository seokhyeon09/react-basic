import React ,{useState} from 'react'

const Counter=()=> {
    //변수, 변수를 관리하는 함수
    const [count, setCount]=useState(0)
    console.log(count)
    const up=()=>{
        setCount(count+1)
    }
    const down=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
  return (
    <div>
        <p>
            {count}
        </p>
        <button onClick={down}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={up}>+</button>
    </div>
  )
}

export default Counter