import React, {useEffect, useState} from 'react';
import './App.css'
import UserList from './Commponent/UserList';
import PostList from './Commponent/PostList';
import UserDetail from './Commponent/UserDetail';
import DummyJson from './Commponent/DummyJson';
function App() {
  return (
    <div>
      <h1>axios</h1>
      {/* <UserList/>
      <PostList/>
      <UserDetail/> */}
      <DummyJson/>
    </div>
  );
}

export default App
