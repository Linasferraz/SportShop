// src/components/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/global.css'; // Importa o CSS do diretório 'src'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src="/images/SPORT2.png" alt="Logo" className="logo-img" /> {/* Substitua 'path/to/logo.png' pelo caminho real do seu logotipo */}
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  );
};

export default Nav;
