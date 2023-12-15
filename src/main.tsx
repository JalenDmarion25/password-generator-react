import React from 'react';
import ReactDOM from 'react-dom/client';
import PasswordGenerator from './Components/passwordGenerator';
import './CSS/index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PasswordGenerator></PasswordGenerator>
  </React.StrictMode>,
)
