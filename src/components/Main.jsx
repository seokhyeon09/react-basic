import React from "react"
const Main = () =>{
    const name = "Alice"
    const age = 23
    const numbers =[10,20,30,40]
    const obj={
        city:'seoul',
        hobby:'programing'
    }
    const isLoggin=true
    return(
        <div>
            <p>
                {isLoggin? "로그인 되었습니다.":"로그아웃 상태입니다."}
            </p>
            <h2>Main입니다.</h2>
            <p>내이름은 {name}입니다.</p>
            <p>내 나이는 {age}살 입니다.</p>
            <p>배열 꺼내서 하나만 넣어보기 {numbers[1]}</p>
            <p>
                나는 {obj.city}에서 살고, 내 취미는 {obj.hobby}입니다.
            </p>
        </div>
    )
}
export default Main