import React, {useEffect, useState} from 'react'

const LifeCycle = () => {
    const [count, setCount]=useState(0)
    useEffect(()=>{
        //로딩이 되면 실행될 업데이트 내용
        // app.jsx에서 useState의 값에따라 실행되는내용들
        console.log('마운트 됨')
        return ()=>{
            console.log('언 마운트됨')
        }
    },[
        //요소의 업데이트 내용
    ])
    useEffect(()=>{
        if(count>0){
            console.log(`업데이트 : ${count}`)
        }
    },[count])
  return (
    <div>
        <p>클릭된 숫자 : {count}</p>
        {/* 기존의 값을 prev에 넣고 카운트+1시킴 */}
        <button onClick={()=>setCount(prev=>prev+1)}>클릭</button>
    </div>
  )
}

export default LifeCycle