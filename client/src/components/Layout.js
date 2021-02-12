import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";

const AppStyles = styled.div`
    width: 85vw;
    height: 100vh;
    margin: 0 auto;
`;

const LineDiv = styled.div`
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    position: relative;
    bottom: 5vh;
`;

export const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <AppStyles>
            <Header siteTitle={title} siteDescription={description} />
            {/* <LineDiv></LineDiv> */}
            {children}
        </AppStyles>
    );
};
