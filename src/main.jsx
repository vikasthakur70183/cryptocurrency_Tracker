import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Cruptotable from './Components/Cryptocurrency_table/Cruptotable.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Converter from './Components/Converter/Converter.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Cruptotable />,
      },
      {
        path: "/Converter",
        element: <Converter/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);