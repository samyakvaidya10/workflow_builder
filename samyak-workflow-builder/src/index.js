import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DnDFlow from './Components/WorkFlow Builder/DnDFlow';
import Home from './Components/Home';
import WorkFLowpage from './Components/WorkFlow Builder/WorkFLowpage';
import WorkFLowExecution from './Components/WorkFlow Execution/WorkFLowExecution';


const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
      path:'work-flow-builder',
      element:<WorkFLowpage />
      },
      {
        path:'work-flow-builder/:id',
        element:<DnDFlow />
      },
      {
        path:'work-flow-execution',
        element:<WorkFLowExecution />
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter } />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
