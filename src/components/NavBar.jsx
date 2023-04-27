import { Link } from "react-router-dom"
import styled from "styled-components"

const LinkStyled = styled(Link)`
    color: aliceblue;
    font-size: 1.4vw;
    margin: 0.8em;
    padding-bottom: 5px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 3px;
    @media (min-width: 1024px) {
      margin: 1.3em;
    };
    @media (max-width: 640px) {
      font-size: 3vw;
      margin: 0.3em;
    };
`

export default function NavBar () {
    return (
      <nav className="nav flex justify-between items-center">
            <picture className="m-10">
          <source media="(max-width:640px)" srcSet="../assets/logo-mobile.png" />
          <source media="(min-width:640px)" srcSet="../assets/logo-final.png" />
          <img srcSet="../assets/logo-final.png" alt="logo" />
            </picture>
            <div className="mx-12 my-3 flex flex-col justify-center items-center sm:flex-row">
          <LinkStyled to="./">Accueil</LinkStyled>
                <LinkStyled to="./realisation">Realisation</LinkStyled>
          <LinkStyled to="./about">A propos</LinkStyled>
                <LinkStyled to="./contact">Contact</LinkStyled>
            </div>
      </nav>
    );
  }