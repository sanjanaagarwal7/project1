import React from 'react';
import './App.css';

import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer"
function App() {
  return (
    <>
    <div className="app">
    <Header/>
    <Nav/>
    </div>
    <div className="main">
    <Main/>
    </div>
    <div className="down">
      <Footer/>
    </div>
    </>
  );
}

export default App;
