import loja from "../../assets/loja.png";
import { StyledAbout } from "./aboutStyle";

export default function About() {
  return (
    <StyledAbout>
      <section>
        <img src={loja} alt="Uma foto em preto e branco da fachada de uma das primeiras lojas Starbucks, capturando o estilo arquitetônico original e a atmosfera única da marca em seus primeiros anos de operação." />
        <div>
          <h2>PREPARAÇÃO</h2>
          <h3>Níveis de Torra</h3>
          <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
          <button>SAIBA MAIS</button>
        </div>
      </section>
    </StyledAbout>
  );
};
