import { Link } from "react-router-dom"
import styled from "styled-components"

const LinkStyled = styled(Link)`
    color: aliceblue;
    font-size: 1.6em;
    margin: 2em;
    padding-bottom: 5px;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 3px;
`

export default function NavBar () {
    return (
      <nav className="nav flex justify-between items-center">
            <img className="m-10" src="../assets/logo-final.png" alt="logo" />
            <div className="m-6">
                <LinkStyled to="./">Home</LinkStyled>
                <LinkStyled to="./realisation">Realisation</LinkStyled>
                <LinkStyled to="./about">About</LinkStyled>
                <LinkStyled to="./contact">Contact</LinkStyled>
            </div>
      </nav>
    );
  }