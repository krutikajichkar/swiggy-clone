import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductCardContainer from "./components/Products/ProductCardContainer";
import ProductDetails from "./components/Products/ProductDetails";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Login from "./components/Auth/Login";
// import Cart from "./components/Products/Cart";
// import Login from "./components/Auth/Login";

const Cart = lazy(() => import("./components/Products/Cart"));

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCardContainer />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart/:id",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);
