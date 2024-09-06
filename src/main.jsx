import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/global.css'; 
import './css/contato.css';
import './css/home.css';
import './css/produto.css';
import './css/sobre.css'; // Importe o arquivo CSS global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
