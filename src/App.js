import React from 'react';
import './index.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app_wrapper">
      <Header/>
      <div className='app_body'>
        <SideBar/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
