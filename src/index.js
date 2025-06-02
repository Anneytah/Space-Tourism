import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Home from './Home';
// import Destination from './destination/Destination';
// import { BrowserRouter } from 'react-router-dom';


// const router = createBrowserRouter([{
//   path: "/",
//   element: <Home />,
//   errorElement: <div>404 Not Found</div>
// },
// {
//   path: "/destination",
//   element: <Destination />
// }

// ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* <RouterProvider router={router} /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
