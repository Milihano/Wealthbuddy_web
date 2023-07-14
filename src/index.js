import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Pages/Home/Home';
import Ambassadorship from './Components/Pages/Ambassador/Ambassador';
import ApplyNow from './Components/Pages/ApplyNow/ApplyNow';
import ApplyNow2 from './Components/Pages/ApplyNow/ApplyNow2';
import Faqs from './Components/Pages/Faqs/Faqs';
import TermsandConditions from './Components/Pages/Terms&Conditions/Terms&Conditions';
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Home />,
    errorElement:<PageNotFound />
  },
  {
    path: "/ambassadorship",
    element: <Ambassadorship />,
    errorElement:<PageNotFound />
  },
  {
    path: "/applynow",
    element: <ApplyNow />,
    errorElement:<PageNotFound />
  },
  {
    path: "/applynowsuccess",
    element: <ApplyNow2 />,
    errorElement:<PageNotFound />
  },
  {
    path: "/faqs",
    element: <Faqs />,
    errorElement:<PageNotFound />
  },
  {
    path:"/terms&conditions",
    element:<TermsandConditions/>,
    errorElement:<PageNotFound/>
  }
  ]
 
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
