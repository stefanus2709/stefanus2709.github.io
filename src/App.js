import './App.css';
import HomePage from './components/Home/HomePage';
import ExperiencePage from './components/Experience/ExperiencePage';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
      setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>,
    },
    {
      path: "/experience",
      element: <ExperiencePage darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
    
  );
}

export default App;
