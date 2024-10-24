// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");


    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }

  }

  // const router = createBrowserRouter([

  //   {
  //     path: "/home",
  //     element:
  //       <> 
  //       <Navbar title="TextUtils" About="About Us" changeMode={mode} toggle={toggleMode} />
  //         <Alert alertMsg={alert} />
  //        
  //       </>
  //   },
  //   {
  //     path: "/about",
  //     element: <>
  //     <Navbar title="TextUtils" About="About Us" changeMode={mode} toggle={toggleMode} />

  //     </>
  //   }

  // ])





  return (
    <>
      <Navbar title="TextUtils" About="About Us" changeMode={mode} toggle={toggleMode} />

      {/* <RouterProvider router={router} /> */}

      <Alert alertMsg={alert} />

      {/* <Navbar /> */}

      <div className='container my-3'>
        <Textform heading={<h3> Welcome to <code>TextUtils</code>. your go-to platform for easy and efficient text manipulation.</h3>}
          Showalert={showAlert} changeMode={mode} />

        {/* <About changeMode={mode} title="About Us" /> */}

        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
