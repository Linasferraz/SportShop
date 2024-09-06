// src/components/Home.jsx
import React from 'react';
import '../css/home.css'; // Certifique-se de que o CSS está correto
import '../css/global.css';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img src="/images/banner.png" alt="Banner" className="banner-img" />
      </div>
      <div className="featured-sports">
      <h2 className="encontre-seu-esporte">Encontre seu esporte</h2>
        <div className="sports-images">
          <a href=""><img src="/images/camping.png" alt="Camping" className="rounded-img" /></a>
          <a href=""><img src="/images/corrida.png" alt="Corrida" className="rounded-img" /></a>
          <a href=""><img src="/images/musculacao.png" alt="Musculação" className="rounded-img" /></a>
        </div>
        <div className="small-images">
          <a href=""><img src="/images/natacao.png" alt="Natação" className="small-rounded-img" /></a>
          <a href=""><img src="/images/ciclismo.png" alt="Ciclismo" className="small-rounded-img" /></a>
          <a href=""><img src="/images/futebol.png" alt="Futebol" className="small-rounded-img" /></a>
          <a href=""><img src="/images/surf.png" alt="Surf" className="small-rounded-img" /></a>
          <a href=""><img src="/images/beach.png" alt="Beach tennis" className="small-rounded-img" /></a>
        </div>
        <h2 className="nossas-marcas">Nossas marcas</h2>
        <div className="brand-images">
          <a href=""><img src="/images/kalenji.png" alt="Kalengi" className="vertical-img" /></a>
          <a href=""><img src="/images/rockrider.png" alt="Rockrider" className="vertical-img" /></a>
          <a href=""><img src="/images/domyos.png" alt="Domyos" className="vertical-img" /></a>
          <a href=""><img src="/images/quechua.png" alt="Quechua" className="vertical-img" /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
