import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import breakpoints from "../styles/breakpoints";
import { Header } from "./Header";

const AppStyles = styled.div`
    background: white;
    height: 85vh;
    width: 85vw;
    padding: 20px;
    border: 5px solid black;
    border-radius: 2px;
    box-shadow: 10px 10px 0px 0px black;
    overflow-y: scroll;

    @media only screen and ${breakpoints.device.sm} {
        width: 100vw;
        height: 100vh;
    }
`;

const LineDiv = styled.div`
    width: calc(100% + 40px);
    height: 10px;
    margin-bottom: 10px;
    position: relative;
    bottom: 10vh;
    left: -20px;
    background: black;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: #8c73ff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <React.Fragment>
            <GlobalStyle />
            <AppStyles>
                <Header siteTitle={title} siteDescription={description} />
                <LineDiv />
                {children}
            </AppStyles>
        </React.Fragment>
    );
};
