import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
    border-bottom: 2px solid #000;
    margin: 5vh 0 10vh 0;
    display: flex;
    a {
        text-decoration: none;
    }
`;

const H1Styles = styled.h1`
    font-family: Georgia;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    color: #000;
`;

const NavStyles = styled.nav`
    font-size: 1.2rem;
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    a {
        margin-left: 5vw;
    }
`;

export const Header = ({ siteTitle, siteDescription }) => (
    <HeaderStyles>
        <Link to="/">
            <H1Styles>{siteTitle}</H1Styles>
        </Link>
        <NavStyles>
            <Link to="/about">
                <H1Styles>about</H1Styles>
            </Link>
            <Link to="/blog">
                <H1Styles>blog</H1Styles>
            </Link>
        </NavStyles>
    </HeaderStyles>
);
