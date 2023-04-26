import React from 'react';
import './App.css';
import HomePage from './components/Home/HomePage';
import ExperiencePage from './components/Experience/ExperiencePage';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react'

function App() {
  // This holds the information about dark mode/light mode
  const [mode, setMode] = useState();

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? "dark" : "light";
        console.log(colorScheme); // "dark" or "light"
        setMode(colorScheme);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage screenMode={mode}/>,
    },
    {
      path: "/experience",
      element: <ExperiencePage/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
