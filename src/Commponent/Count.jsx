import React, {useReducer} from 'react'
const reducer=(state, action)=>{
    switch(action.type){
        case "increament":
            return{count:state.count+1}
        case "decreament":
            return{count:state.count-1}
        case "reset":
            return{count:0}
        default:
            throw new Error('오류 코드')
    }
}

const Count = () => {
    const initailState = {count:0}
    //dispatch는 상태를 변화할 수 있는 함수
    const [state, dispatch] = useReducer(reducer, initailState)
  return (
    <div>
        <p>현재의 카운트 : {state.count}</p>
        <button onClick={()=>dispatch({type:"decreament"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        <button onClick={()=>dispatch({type:"increament"})}>+</button>
    </div>
  )
}

export default Count