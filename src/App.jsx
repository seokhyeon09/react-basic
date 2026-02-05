import './App.css'
import Counter from './Commponent/Counter';
import Exam1 from './Commponent/Exam1';
import Exam2 from './Commponent/Exam2';
import Exam3 from './Commponent/Exam3';
function App() {
  const user={
    name:'Alice',
    age:21
  }
  return (
    <div>
      <h2>useState연습</h2>
      <Exam1 name={user.name} age={user.age}/>
      <Exam2/>
      <Exam3/>
      <Counter/>
    </div>
  );
}

export default App
