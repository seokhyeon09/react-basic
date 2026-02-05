import React, {useState} from 'react';
import './App.css'
import Counter from './Commponent/Counter';
import Exam1 from './Commponent/Exam1';
import Exam2 from './Commponent/Exam2';
import Exam3 from './Commponent/Exam3';
import InputFocus from './Commponent/InputFocus';
import Counter2 from './Commponent/Counter2';
import LifeCycle from './Commponent/LifeCycle';
function App() {
  const [state, setState]=useState(true)
  const user={
    name:'Alice',
    age:21
  }
  return (
    <div>
      <h2>useState, useRef연습</h2>
      <Counter/>
      <Exam1 {...user}/>
      <Exam2/>
      <Exam3/>
      <InputFocus/>
      <Counter2/>
      <button onClick={()=>setState(true)}>마운트</button>
      <button onClick={()=>setState(false)}>언마운트</button>
      {state &&
      //&& 연산자가 처음이 false일때 뒷내용은 검사하지 않는 점을 이용
        <LifeCycle/>
      }
    </div>
  );
}

export default App
