import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.title = 'TextUtiLL App -Dark Mode';
      showAlert("Dark Mode has been enabled", "success");
      // This will blink on title
      // setInterval(() => {
      //   document.title = 'TextUtiLL App -Dark Mode';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'TextUtiLL App -Is Amazing App';
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtiLL App';
      showAlert("Dark Mode has been disabled", "success");
      // This will blink on title
      // setInterval(() => {
      //   document.title = 'TextUtiLL App -Light Mode';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'TextUtiLL App -Is Amazing App';
      // }, 2000);
    }
  }
  return (
    <>
       <Navbar title="TextUtils" home={"Home"} aboutText={"About"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Text Utils- Word Counter, Character Counter " showAlert={showAlert} mode={mode} />
      </div>
      <About mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;