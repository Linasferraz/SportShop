import React from 'react';
import '../css/sobre.css'; // Importa o CSS global
import '../css/global.css';

const Sobre = () => {
  return (
    <div className="sobre">
      <img src="/images/sobre.png" alt="Sobre a loja" className="sobre-imagem" />
      <div className="sobre-texto">
        <h1>Sobre a Nossa Loja</h1>
        <p>
          Bem-vindo à nossa loja! Aqui, você encontrará uma variedade de produtos
          e equipamentos para esportes. Nosso objetivo é fornecer a melhor qualidade
          e serviço para nossos clientes, oferecendo uma seleção cuidadosamente escolhida
          de itens para atender a todas as suas necessidades esportivas. Com anos de
          experiência e uma paixão pelo que fazemos, estamos aqui para ajudar você a
          encontrar tudo o que precisa para se manter ativo e saudável.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
