import React from 'react';
import Header from './components/Header/Header.component';
import SideBar from './components/Sidebar/SideBar.component';
import Feed from './components/Feed/Feed.component'
import './App.css';

function App() {
  return (
    <div className="app">


      <Header />

      <div className="app__body">
        <SideBar />
        <Feed />
      </div>

    </div>

    // header
    // AppBody
    // SidebAr
    // Feed
    // widgets
  );
}

export default App;
