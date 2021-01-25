import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
    border-bottom: 2px solid #000;
    margin: 5vh 0 10vh 0;
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

export const Header = ({ siteTitle, siteDescription }) => (
    <HeaderStyles>
        <Link to="/">
            <H1Styles>{siteTitle}</H1Styles>
        </Link>
    </HeaderStyles>
);
