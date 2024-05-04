import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import FormText from './components/formText';
import About from './components/About';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function App() {
const [mode,setMode]=useState('light');
const [alert,setAlert] = useState(null);

const showAlert=(message , type)=>{
  setAlert({
    msg:message,
    type:type
  });
  setTimeout(() => {setAlert(null)}, 1600);
}

const toggleMode=()=>{
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#46484b';
    document.body.style.color='white';
    showAlert("Dark mode has been enabled","success");
   
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='#FAF9F6';
    document.body.style.color='black';
    showAlert("Light mode has been enabled","success");

  }
}
return (
<>
<Router>

  <Navbar title='TextPlay' mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-5 ">
  <Routes>
  <Route exact path='/' element={<FormText showAlert={showAlert} heading="Enter Your Text" mode={mode}/>} />
  <Route exact path='About' element={<About/>} />
  </Routes>
  </div>

  </Router>
</>);
}

export default App;
