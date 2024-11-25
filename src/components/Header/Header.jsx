import { Link } from "react-router-dom";
import logo from "../../assets/starbucks-logo.svg";
import { HeaderStyled } from "./headerStyle";

export default function Header() {
  return (
    <HeaderStyled>
      <nav>
        <img src={logo} alt="Logo Starbucks" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};
