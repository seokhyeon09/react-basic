import React, {useState} from 'react';
import SquareCalc from './Commponent/SquareCalc';
import SortableList from './Commponent/SortableList';
import PeopleList from './Commponent/PeopleList';
import './App.css'
function App() {
  return (
    <div>
      <SquareCalc/>
      <SortableList/>
      <PeopleList/>
    </div>
  );
}

export default App
