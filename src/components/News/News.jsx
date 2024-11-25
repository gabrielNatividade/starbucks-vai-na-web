import cafe from "../../assets/grao_cafe.png"
import { StyledNews } from "./newsStyle";

export default function News() {
  return (
    <StyledNews>
      <section>
        <div>
          <h3>PREPARAÇÃO</h3>
          <h2>Níveis de Torra</h2>
          <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
          <button>SAIBA MAIS</button>
        </div>
        <img src={cafe} alt="Uma imagem em zoom com uma colagem mostrando 3 tipos de torra de café, torra suave, equilibrada e forte. " />
      </section>
    </StyledNews>
  );
};
