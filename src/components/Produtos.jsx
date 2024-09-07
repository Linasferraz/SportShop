 import  '../css/produto.css';
import '../css/global.css';

const Produtos = () => {
  return (
    <>
    <div className="produtos">
  <h1>Nossos Produtos</h1>
</div>

<section id="natacao" className="secao-produtos">
  <h2>Natação</h2>
  <div className="container-produtos">
    <div className="produto">
      <img src="../images/oculos_natacao.png" alt="Óculos de Natação" />
      <span>Óculos de Natação</span>
      <span>R$60,00</span>
    </div>

    <div className="produto">
      <img src="../images/prancha_natacao.png" alt="Prancha de Natação" />
      <span>Prancha de Natação</span>
      <span>R$90,00</span>
    </div>
  </div>
</section>

<section id="ciclismo" className="secao-produtos">
  <h2>Ciclismo</h2>
  <div className="container-produtos">
    <div className="produto">
      <img src="../images/bike.png" alt="Bicicleta Profissional" />
      <span>Bicicleta Profissional</span>
      <span>R$1200,00</span>
    </div>
    <div className="produto">
      <img src="../images/moletom.png" alt="Corta vento" />
      <span>Corta vento</span>
      <span>R$200,00</span>
    </div>
  </div>
</section>

<section id="futebol" className="secao-produtos">
  <h2>Futebol</h2>
  <div className="container-produtos">
    <div className="produto">
      <img src="../images/joelheira.png" alt="joelheira" />
      <span>Joelheira</span>
      <span>R$40,00</span>
    </div>
    <div className="produto">
      <img src="../images/chuteira.png" alt="chuteira" />
      <span>Chuteira</span>
      <span>R$500,00</span>
    </div>
  </div>
</section>

<section id="surf" className="secao-produtos">
  <h2>Surf</h2>
  <div className="container-produtos">
    <div className="produto">
      <img src="../images/prancha.png" alt="prancha" />
      <span>Prancha de Surf</span>
      <span>R$400,00</span>
    </div>
    <div className="produto">
      <img src="../images/roupa de borracha.png" alt="roupa de borracha" />
      <span>Roupa de Borracha</span>
      <span>R$1600,00</span>
    </div>
  </div>
</section>

<section id="beachtennis" className="secao-produtos">
  <h2>Beach Tennis</h2>
  <div className="container-produtos">
    <div className="produto">
      <img src="../images/raquete.png" alt="raquete de beach tennis" />
      <span>Raquete de Beach Tennis</span>
      <span>R$500,00</span>
    </div>
    <div className="produto">
      <img src="../images/regata.png" alt="regata" />
      <span>Regata</span>
      <span>R$60,00</span>
    </div>
  </div>
</section>
  </>
  );
};

export default Produtos;