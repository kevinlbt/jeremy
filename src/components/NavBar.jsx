import { Link } from "react-router-dom"
import styled from "styled-components"

const LinkStyled = styled(Link)`
    color: aliceblue;
    font-size: 1.5vw;
    margin: 1em;
    padding-bottom: 5px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 3px;
    @media (min-width: 1024px) {
      margin: 2em;
      font-size: 1.2vw;
    };
    @media (max-width: 640px) {
      font-size: 3vw;
      margin: 0.3em;
    };
`

export default function NavBar () {
    return (
      <nav className="nav flex justify-between items-center">
            <a className="logo m-10" href="/">
                <picture>
                    <source media="(max-width:640px)" srcSet="../assets/Logo.png" />
                    <source media="(min-width:640px)" srcSet="../assets/Logo.png" />
                    <img srcSet="../assets/Logo.png" alt="logo" />
                </picture>
            </a>
        <div className="nav_link pr-5 sm:pr-24 flex flex-col justify-center items-center sm:flex-row">
            <LinkStyled to="./realisation">Realisation</LinkStyled>
            <LinkStyled to="./youtube">youtube</LinkStyled>
            <LinkStyled to="./contact">Contact</LinkStyled>
        </div>
      </nav>
    );
  }