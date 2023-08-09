import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import  { appRouter  } from './App';
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={appStore}>
   <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

