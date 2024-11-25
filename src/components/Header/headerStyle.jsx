import styled from "styled-components";

export const HeaderStyled = styled.header`
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    height: 15vh;
    margin: 0 4vw;
  }
  
  img {
    height: 9vh;
  }

  ul {
    display: flex;

    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0;
      padding-right: 3vw;
    }

    a  {
      text-decoration: none;
      color: #1E3932;
      font-size: 1.5rem;
      font-family: Poppins;
      font-weight: 500;
    }
    a:hover {
      color: #037143;
    }
  }
`
