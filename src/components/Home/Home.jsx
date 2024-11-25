import { useState } from "react";
import { HomeStyled } from "./homeStyle";
import vermelhoP from "../../assets/vermelho_p.png";
import amareloP from "../../assets/amarelo_p.png";
import laranjaP from "../../assets/laranja_p.png";
import vermelhoG from "../../assets/vermelho_g.png";
import amareloG from "../../assets/amarelo_g.png";
import laranjaG from "../../assets/laranja_g.png";

export default function Home() {
  const [copo, setCopo] = useState(laranjaG);
  const [bgColor, setBgColor] = useState('#037143');

  const verLaranja = () => {
    setCopo(laranjaG);
    setBgColor("#037143");
  };
  const verVermelho = () => {
    setCopo(vermelhoG);
    setBgColor("#97090C");
  };
  const verAmarelo = () => {
    setCopo(amareloG);
    setBgColor("#DECD13");
  };

  return (
    <HomeStyled>
      <section id="anuncio">
        <div id="enunciado">
          <h3>Mais que café</h3>
          <h2>Isso é <h1>Starbucks</h1></h2>
          <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
          <button id="mais">SAIBA MAIS</button>
        </div>
        <div id="circulo" style={{backgroundColor: bgColor}}>
          <img id="copoG" src={copo} alt="Um copo grande mostrando uma deliciosa bebida gelada" />
        </div>
      </section>
      <section id="opcoes">
        <button className="amostras" onClick={verLaranja}>
          <img src={laranjaP} alt="Miniatura de um copo na cor laranja" />
        </button>
        <button className="amostras" onClick={verVermelho}>
          <img src={vermelhoP} alt="Miniatura de um copo na cor vermelha" />
        </button>
        <button className="amostras" onClick={verAmarelo}>
          <img src={amareloP} alt="Miniatura de um copo na cor amarela" />
        </button>
      </section>
    </HomeStyled>
  );
};
