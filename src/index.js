import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Root from './pages/root'
import Test from './pages/test'
import Home from './pages/home'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/:type' element = {<Test/>}/>
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
