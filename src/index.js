import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { TweenOneGroup } from 'rc-tween-one';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TweenOneGroup>
  <React.StrictMode>
    <BrowserRouter>
  <SpeedInsights>
    <Analytics>
    <App />
    </Analytics>
    </SpeedInsights>
    
    </BrowserRouter>
  </React.StrictMode>
  </TweenOneGroup>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
