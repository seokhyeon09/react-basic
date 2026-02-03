import React from 'react'
import "./Header.css"
function Header() {
    const navList=[
        {title:'홈', desc:'홈으로 바로가기'},
        {title:'공지사항', desc:'공지 바로가기'},
        {title:'이벤트', desc:'이벤트 바로가기'},
        {title:'커뮤니티', desc:'커뮤니티 바로가기'}
    ]
  return (
    <header>
        <h1>Title</h1>
        <ul className='nav-list'>
            {/* 태그를 사용할 땐 소괄호 안에 써야함, map( (매개변수) => (태그용소괄호)) */}
            {navList.map((nav,i)=>(
                <li key={i}>
                    <span className='tit'>
                        {nav.title}
                    </span>
                    -
                    <span className='dsc'>
                    {nav.desc}
                    </span>
                </li>
            ))}
        </ul>
    </header>
  )
}

export default Header