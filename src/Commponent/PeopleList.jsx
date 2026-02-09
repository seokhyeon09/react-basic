import React, { useState, useMemo } from 'react'

const PeopleList = () => {
    const [keyword, setKeyword] = useState('')
    const [people] = useState([
        { name: "David", age: 28 },
        { name: "Alice", age: 22 },
        { name: "Charlie", age: 35 },
        { name: "Bob", age: 30 },
        { name: "Eve", age: 28 },
        { name: "Frank", age: 40 },
        { name: "Grace", age: 25 },
        { name: "Helen", age: 22 },
        { name: "Ian", age: 33 },
        { name: "Jack", age: 30 },
        { name: "Karen", age: 27 },
        { name: "Leo", age: 35 },
        { name: "Mona", age: 24 },
        { name: "Nina", age: 29 },
        { name: "Oscar", age: 31 },
    ]);
    const namefilter = useMemo(() => {
        return people.filter((person)=>
            person.name.toLowerCase().includes(keyword.toLowerCase())
        //오름차순
        ).sort((a,b)=>a.age - b.age)
    }, [keyword, people])
    return (
        <div>
            <h2>People List</h2>
            <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                type="text"
                placeholder='이름을 입력해주세요' />
            <ul>
                {namefilter.map((person, i) => (
                    <li key={i}>{person.name} {person.age}  </li>
                ))}
            </ul>
        </div>
    )
}

export default PeopleList