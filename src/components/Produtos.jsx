 import  '../css/produto.css';
import '../css/global.css';

const Produtos = () => {
  return (
    <>
    <div className="produtos">
      <h1>Nossos Produtos</h1>
    </div>
    <h2>Natação</h2>
    <div className='container-natacao'>
      <img src="../images/oculos_natacao.png" alt="" />
      <span>Òculos de Natação</span>
      <span>R$60,00</span>
    </div>

    <div className='container-natacao'>
      <img src="../images/prancha_natacao.png" alt="" />
      <span>Prancha de Natação</span>
      <span>R$90,00</span>
    </div>
    </>
  );
};

export default Produtos;
