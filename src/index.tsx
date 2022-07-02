import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import List from './List/List'
import Bottom from './Bottom'
import Inputer from './Tops/Inputer'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Inputer />
    <List />
    <Bottom />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
