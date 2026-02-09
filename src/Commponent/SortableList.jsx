import React, {useState, useMemo} from 'react'

const SortableList = () => {
    const [keyword, setKeyword]=useState('')
    const [names]=useState([
        'David', 'Alice', 'Charlie', 'Bod'
    ])
    const filtered=useMemo(()=>{
        console.log('정렬 필터링중 ...')
        //return 할때 검색 - name의 소문자형과 입력받은 소문자형이 일치하면 정렬함
        return names
        .filter((name)=>name.toLowerCase().includes(keyword.toLowerCase()))
        .sort()
    },[keyword, names])
  return (
    <div>
        <h2>useMemo 정렬 리스트</h2>
        <input 
         value={keyword}
         type="text"
         onChange={(e)=>setKeyword(e.target.value)}
         placeholder='이름을 입력하세요'/>
        <ul>
            {filtered.map((name, i)=>(
                <li key={i}>
                    {name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SortableList