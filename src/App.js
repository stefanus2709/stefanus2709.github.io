import React from 'react';
import './App.css';
import HomePage from './components/Home/HomePage';
import ProjectPage from './components/Experience/ExperiencePage';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/project",
    element: <ProjectPage/>,
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
