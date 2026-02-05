import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const colors = ["red", "blue", "green"];
    const [index, setIndex] = useState(0)

    const changeColor = () => {
        // setIndex(index+1)
        // if (index >= 2) setIndex(0)

        setIndex((prev)=>(prev+1)%colors.length)
    }

    return (
        <div>
            <Child color={colors[index]} />
            <button onClick={changeColor}>색상 변경</button>
        </div>
    )
}

export default Parent