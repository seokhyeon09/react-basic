import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

const UserList = () => {
    //리스트가 여러개 띄워주는거면 초기값을 빈배열로해야함
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            //잘됐을때
            .then((res) => {
                console.log(res.data)
                setUser(res.data)
                setLoading(false)
            })
            //에러가났을때
            .catch((err)=>{
                console.error('데이터를 가져오지 못했습니다.',err)
                setError('데이터를 가져오지 못했습니다.')
                setLoading(false)
            })
    }, [])

    const filtered = useMemo(()=>{
        //배열에서 sort 함수를 쓸땐 정렬 기준을 명확히 정의해야 합니다 
        return user.filter((u)=>u.name.toLowerCase().includes(keyword.toLowerCase())).sort((a,b)=>a.name.localeCompare(b.name))
    },[keyword, user])

    if(loading)return <p>로딩중...</p>
    if(error)return <p>{error}</p>
    return (
        <div>
            <h2>UserList</h2>
            <input type="text"
                value={keyword}
                onChange={(e)=>setKeyword(e.target.value)}
                placeholder='이름을 입력해주세요'
            />
            <ul>
                {filtered.map((u,i)=>(
                    <li key={u.id}>
                        <div>name : {u.name}</div>
                        <div>email : {u.email}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList