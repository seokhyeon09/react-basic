import React, { useEffect, useState } from 'react'

const Child = ({color='none'}) => {
    const [message, setMessage]=useState("색상이 변경되었습니다.")
    useEffect(()=>{
        setMessage(`색상이 ${color}로 변경되었습니다.`)
    },[color])
  return (
    <div>
        <h1>자식요소</h1>
        <p>현재 색상 <strong style={{color}}>{color}</strong> </p>
        <p>{message}</p>
    </div>
  )
}

export default Child