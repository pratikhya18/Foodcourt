import React from 'react';
import ReactDOM from 'react-dom';
import App from "../Website/App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
 import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    < App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
 reportWebVitals();