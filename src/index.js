import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./Contact"
import About from './About';
import Home from "./Components/Home/Home";
import Product from './Components/Product/Product';
import productlistslice from './productlistslice';


const router = createBrowserRouter([
  {
    path: "/hello",
    element: <div>Hello world!</div>,
  },
  {
    path:"/",
    element: <Provider store={store}><App /></Provider>,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "/",
        element: <Home />,
      },

      {
        path: "product/id=:productid",
        element: <Product/>,
      },


    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
