// src/components/Home.jsx
import '../css/home.css'; // Certifique-se de que o CSS está correto
import '../css/global.css';

const Home = () => {
  return (
    <>
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
          <a href="/produtos#natacao"><img src="/images/natacao.png" alt="Natação" className="small-rounded-img" /></a>
          <a href="/produtos#ciclismo"><img src="/images/ciclismo.png" alt="Ciclismo" className="small-rounded-img" /></a>
          <a href="/produtos#futebol"><img src="/images/futebol.png" alt="Futebol" className="small-rounded-img" /></a>
          <a href="/produtos#surf"><img src="/images/surf.png" alt="Surf" className="small-rounded-img" /></a>
          <a href="/produtos#beachtennis"><img src="/images/beach.png" alt="Beach tennis" className="small-rounded-img" /></a>
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
