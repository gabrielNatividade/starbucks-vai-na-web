# Desafio Final Módulo 2 - Vai na Web

## Descrição do desafio:

### Objetivo: 
Desenvolver um site que deve ser fiel ao design proposto no Figma colocando em prática o que aprendeu ao longo do módulo 2 desenvolvendo técnicas de React e Styled-Component, além de demonstrar as habilidades aprendidas no Módulo 1 como HTML, CSS e Git.

### Especificações do Projeto:
- Desenvolver uma aplicação web em React seguindo o modelo proposto no [Figma](https://www.figma.com/design/lDEBqDNjbhumoZwQ7CBL7P/Starbucks?node-id=0-1&node-type=canvas&t=mB1nysvZUBrsRoip-0).
- A estilização deve ser feita usando **Styled-Component**.
- Semântico: Utilizar as tags de maneira apropriada, garantindo que o conteúdo seja facilmente compreendido e acessível.
- Nomenclatura Coerente: Utilizar nomes que descrevam o papel ou a função visual do componente na interface.

---

## Métodos utilizados:

### Início do projeto:

- Um projeto React foi criado através do Vite.
- Foi deletado todos os arquivos de testes que o Vite cria normalmente.
- Criei o diretório `components` e dentro dele as pastas `About`, `Header`, `Home`, `News` e dentro de cada pasta os respectivos arquivos `.jsx`.
- Foram instalados os módulos [Styled-Components](https://styled-components.com/docs) e [React Router](https://v5.reactrouter.com/web/api/BrowserRouter).
- Adicionado as imagens a serem usadas que foram disponibilizadas no Figma.
- Criado os arquivos de estilos em suas respectivas pastas de componentes.
- Exportado as fontes de texto que serão usadas na `head` do `index.html`.

### Desenvolvimento do App:

- No `App.jsx` foi importado os atributos `BrowserRouter`, `Route` e `Routes` da `react-router-dom`, os componentes `Header`, `Home`, `About` e `News` e o `GlobalStyle` que será o reset de estilo da página.
- Foi feito a exportação da função padrão `App()` retornando todos os componentes que serão renderizados. Retornando:
  - GlobalStyle: para indicar onde que ficação as rotas.
  - Header: Para que seja renderizado o menu de navegação.
  - Routes: Tag pai que acolherá as rotas em si.
  - Route: Uma rota para cada caminho da página web.

### Reset global
- O reset global foi criado conforme o padrão exceto pela adição do atributo `overflow: hidden;` no *body* para que seja possível que o circulo de fundo fique escondido fora dos limites da página. Importante notar que como todas as páginas serão apenas um único tamanho não há nenhum problema em usar essa funcionalidade para toda a página, porém caso seja necessário adicionar rolagem em alguma página do site, este atributo deve ser revisado.

### Desenvolvimento da Header:

- Na Header foi usado o atributo `Link` dentro das `<li>` para indicar a navegação e importado o arquivo de estilização `headerStyle.jsx`.
- No arquivo de estilo  foi usado flex box e um pouco de aninhamento pra manter o código limpo.
- O arquivo foi estilizado para ficar conforme o proposto no Figma, utilizando flexbox e resets para que fique o mais parecido possível.

### Desenvolvimento do About:
- O arquivo foi iniciado com a exportação da função padrão `About()` retornando a tag `<StyledAbout>` que foi importada do arquivo de estilo `aboutStyle.jsx`.
- Dentro dessa tag container é estruturado o html contendo os detalhes da página de acordo com o Figma.
- Para o botão foi optado por usar a tag `<button>` por ser mais semântica e atual.
- Além da estilização conforme o Figma foi usado o pseudo-elemento `:hover` pra criar a aparência de um link clicável.

### Desenvolvimento do News:
- Como a maior parte do estilo desta página já estava pronto no `About` foi reutilizado copiando a maior parte do código de estilo do `aboutStyle.jsx` para o `newsStyle.jsx`.
- Foi adicionado o `background-color` e ajustado o tamanho da imagem.

### Desenvolvimento da Home:
- Na `Home.jsx` foi importado o `useState` o `styledHome` e as imagens que serão usadas nesta página.
- Para esta página será usado o `useState` para fazer a animação do copo e do círculo colorido.
- No caso do copo grande foi definido o copo laranja como padrão e no círculo foi delcarado a cor de fundo que será usado posteriormente.
- Como variáveis foram declaradas: 
  - `copo` e `setCopo` como variáveis para alterar o estado da imagem de copo grande.
  - `bgColor` e `setBgColor` 

```jsx
  const [copo, setCopo] = useState(laranjaG);
  const [bgColor, setBgColor] = useState('#037143');
```

- Foram declarados 3 funções `verLaranja`, `verVermelho` e `verAmarelo` que serão usadas pelo botão de mudar os copos grandes.
- Cada uma dessas funções chamam uma *arrow function* que retorna e executa as alterações das respectivas imagens e cores de fundo do circulo.

```jsx
const verLaranja = () => {
    setCopo(laranjaG);
    setBgColor("#037143");
  };
```
- Para o efeito das imagens que irão mudar conforme os botões são acionados foi declarado da seguinte forma:
  ```html
  <div id="circulo" style={{backgroundColor: bgColor}}>
      <img id="copoG" src={copo} alt="*" />
  </div>
  ```
  - Como a imagem do copo e o círculo ao fundo serão jogados para o canto da tela através de `position` na página de estilo, aqui eles recebem um id de forma a simplificar o código.
  - A tag `<div>` recebe os atributos `id`, para que seja unicamente identificado, e `style` para que simplifique a lógica da função que mude a cor de fundo. Aqui o atributo `style` recebe a propriedade `backgroundColor` e é passado como parâmetro de cor a variável `bgColor`.

- Para a seção dos botões foi usado uma `<section>` com o id `opcoes` e dentro dessa tag foi declarado todos botões utilizando o seguinte esquema:
```html
<section id="opcoes">
        <button className="amostras" onClick={verLaranja}>
          <img src={laranjaP} alt="*" />
        </button>
```
- Cada botão recebe o elemento `onClick` que chama a respectiva função para mudar o que seráexibido na amostra e a tag `<img>` foi declarada usando as imagens que foram importada, desta forma a função pode alterar corretamente quando o botão for acionado.
- O restante da pagina foi estruturado para seguir a ordem dos componentes de acordo com o Figma.
- Na estilização foi usado um pouco de aninhamento para manter o código limpo e direfente das outras páginas aqui foi necessário que o botão de *SAIBA MAIS* recebesse uma id para diferenciar dos botões que alteram a cor do copo no mostuário.
- No estilo do círculo colorido ao fundo do copo foi utilizado `position` e `z-index`.
- Como a imagem do copo já estava contida dentro da *div* do círculo não foi necessário utilizar position para puxar a imagem para o canto.




#### Updates
- Adicionado um texto `alt` em todas as imagens do site.
