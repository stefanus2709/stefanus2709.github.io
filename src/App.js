import React from 'react';
import './App.css';
import HomePage from './components/Home/HomePage';
import ExperiencePage from './components/Experience/ExperiencePage';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/experience",
    element: <ExperiencePage/>,
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
