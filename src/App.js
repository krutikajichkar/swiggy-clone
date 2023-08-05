import React from "react";
import './App.css';
import Header from './components/Header/Header';
import ProductCardContainer from './components/Products/ProductCardContainer';
import ProductDetails from './components/Products/ProductDetails';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import About from "./components/About/About";

 function App() {
  return (
    <div className="App">
     <Header/>
     <Outlet/>
    </div>
  );
}

export const appRouter = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[{
    path:'/',
    element:<ProductCardContainer/>
  },{
    path:'/product-details/:id',
    element:<ProductDetails/>
  },
  {
    path:'/about',
    element:<About/>
  }
]
}])




