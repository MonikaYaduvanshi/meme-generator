import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Nav from './Components/nav';
import Main from './Components/main';
import Test from './Components/test';
import Boxes from './Components/test2';
import Message from './Components/test3';
import Form from './Components/form';
import SignInSide from './Components/login'
import Apitest from './Components/apitest';
import Window from './Components/windowTracker/windowTrackerUtil';

// todos
// set css accroding to theme
// toggle theme


function App() {
  // const [project, setProject] = useState("Meme Generator");
  const [darkmode, setDarkmode] = useState(false);
  function toggleDarkmode(){
    setDarkmode(mode => !mode);
  }

  return (
    <div>
      <Nav darkmode={darkmode} toggleDarkmode={toggleDarkmode}/>
      <Main darkmode={darkmode}/>
      {/* <Window /> */}

      {/* <Test/> */}
      {/* <Message/> */}
      {/* <Form/> */}
      {/* <SignInSide /> */}
      {/* <Apitest/> */}
    </div>
  );
}

export default App;
