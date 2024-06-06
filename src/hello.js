// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
// import { type } from '@testing-library/user-event/dist/type';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
    const [mode,setmode]=useState('light');
    const [alert,setalert]=useState(null);

    const showalert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 1400);
    };
    const togglemode=()=>{
      if(mode==='light')
        {
          setmode('dark');
          document.body.style.backgroundColor='grey'
          showalert("Darkmode is activated","success");
          document.title="TextUtlis: Darkmode";
        }
        else{
          setmode('light')
          document.body.style.backgroundColor='white'
          showalert("Lightmode is activated","success");
          document.title="TextUtlis: Lightmode";
        }
    };
  return (
    <>
    <Router>
      

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route>

            <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

            </Route>
          </Routes>


      </div>


      </Router>

    </>
   
  );
}

export default App;
