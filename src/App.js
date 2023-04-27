import './App.css';
import HomePage from './components/Home/HomePage';
import ExperiencePage from './components/Experience/ExperiencePage';
import MakroAlphaSolusindoDetailPage from './components/ExperienceDetail/MakroAlphaSolusindoDetailPage';
import NutrifoodIndonesiaDetailPage from './components/ExperienceDetail/NutrifoodIndonesiaDetailPage';
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
    {
      path: "/experience/makro-alpha-solusindo",
      element: <MakroAlphaSolusindoDetailPage darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>,
    },
    {
      path: "/experience/nutrifood-indonesia",
      element: <NutrifoodIndonesiaDetailPage darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
    
  );
}

export default App;
