import styled from "styled-components";

export const StyledNews = styled.main`
   section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #1E3932;
    height: 85vh;
  }
  img {height: 40vh;}

  div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: start;
    color: #ffffff;
    width: 40%;
    height: 40%;
    font-family: Poppins;

    h2 {
      font-family: Inter;
      font-size: 1.5rem;
    }

    h3 {font-size: 4rem;}

    p {font-size: 1.5rem;}

    button{
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
  }
`
