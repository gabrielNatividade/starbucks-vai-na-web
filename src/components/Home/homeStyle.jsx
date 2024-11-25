import styled from "styled-components";

export const HomeStyled = styled.main`
  main {
    height: 85vh;
  }

  section {
    display: flex;
    justify-content: space-between;
  }

  #anuncio {
    font-family: Poppins;
    font-size: 3.4rem;
    padding: 10vh 0 10vh 5vw;
    height: 60vh;
  }

  h3 {
    font-family: Inter;
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
    font-size: 3.6rem;
    h1 {
      color: #037143;
      
      display: inline;
    }
  }

  #enunciado { width: 600px; }

  p { font-size: 1.5rem; }
  
  #circulo {
    border-radius: 1000px;
    width: 1200px;
    height: 1200px;

    position: relative;
    left: 500px;
    top: 200px;
    z-index: -1;

    img {
      height: 50vh;
    }
  }

  #opcoes {
    display: flex;
    justify-content: center;
    height: 10vh;
    margin: 5vh 0;
  }

  button.amostras{
    background-color: #00000000;
    border: none;
    margin: 0 1%;

    img { 
      height: 12vh; 
      
      &:hover{
        cursor: pointer;
        transform: rotate(10deg) translateY(-10px);
        transition: transform 0.2s;
      }
    }
  }

  button#mais {
    font-family: Inter;
    font-size: 1.5rem;
    color: #ffffff;
    background-color: #037143;
    border-radius: 30px;
    border-style: none;
    width: 15vw;
    height: 5vh;
   
    &:hover {
      cursor: pointer;
      background-color: #195324;
    }
  }
`
