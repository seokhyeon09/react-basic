import React, {useState, useMemo} from 'react'

const SquareCalc = () => {
    const [number, setNumber]=useState(0)
    const [count, setCount]=useState(0)

    // 어떤 값이 변경 될 때에만 실행되어 메소드안의 값을 변경시킴
    const squared = useMemo(()=>{
        console.log('제곱 계산중 ...', number, count)
        return number*number
    },[number, count])
  return (
    <div>
        <h2>숫자의 제곱 구하기</h2>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="number"
                onChange={(e)=>setNumber(e.target.value)}
                placeholder='숫자를 입력하세요'/>
            <p>{number}의 제곱근은? {squared}</p>
            <button
                onClick={()=>setCount(count+1)}
            >카운트 증가 : {count}</button>
            <button
                onClick={()=>setCount(0)}
            >초기화</button>
        </form>
    </div>
  )
}

export default SquareCalc