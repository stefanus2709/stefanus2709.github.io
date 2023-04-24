import React from 'react';
import './App.css';
import HomePage from './component/Home/HomePage';
import ProjectPage from './component/Project/ProjectPage';
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
