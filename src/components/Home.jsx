// src/components/Home.jsx
import '../css/home.css'; 
import '../css/global.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="home">
      <div className="banner">
        <img src="/images/banner-img-sport.jpg" alt="Banner" className="banner-img" />
        <h1>Seu Desempenho, Nossa Missão.</h1>
        <h1 id='texto-sec'>Treine, Supere, Vença!</h1>
      </div>
      
      <div className="featured-sports">
      <h2 className="encontre-seu-esporte">Encontre seu esporte</h2>
        <div className="sports-images">
          <a href=""><img src="/images/camping.png" alt="Camping" className="rounded-img" /></a>
          <a href=""><img src="/images/corrida.png" alt="Corrida" className="rounded-img" /></a>
          <a href=""><img src="/images/musculacao.png" alt="Musculação" className="rounded-img" /></a>
        </div>
        <div className="small-images">
          <Link to="/produtos#natacao">
            <img src="/images/natacao.png" alt="Natação" className="small-rounded-img" />
          </Link>
          <Link to="/produtos#ciclismo">
            <img src="/images/ciclismo.png" alt="Ciclismo" className="small-rounded-img" />
          </Link>
          <Link to="/produtos#futebol">
            <img src="/images/futebol.png" alt="Futebol" className="small-rounded-img" />
          </Link>
          <Link to="/produtos#surf">
            <img src="/images/surf.png" alt="Surf" className="small-rounded-img" />
          </Link>
          <Link to="/produtos#beachtennis">
            <img src="/images/beach.png" alt="Beach tennis" className="small-rounded-img" />
          </Link>
        </div>
        <h2 className="nossas-marcas">Nossas marcas</h2>
        <div className="brand-images">
          <img src="/images/kalenji.png" alt="Kalengi" className="vertical-img" />
          <img src="/images/rockrider.png" alt="Rockrider" className="vertical-img" />
          <img src="/images/domyos.png" alt="Domyos" className="vertical-img" />
          <img src="/images/quechua.png" alt="Quechua" className="vertical-img" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
