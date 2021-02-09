import React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";

const MainStyles = styled.main`
    width: 60vw;
    margin: 10% auto;
`;

const SideNoteStyles = styled.div`
    display: flex;
    flex-direction: column;
`;

const UpArrowStyles = styled.span`
    color: red;
`;

const Main = ({ data }) => {
    console.log("---- ", data);
    return (
        <>
            <Layout>
                <MainStyles>
                    <SideNoteStyles>
                        <span>(she/her)</span>
                        <UpArrowStyles>^</UpArrowStyles>
                    </SideNoteStyles>
                    <h1>
                        I'm Ivana (she/her). I'm a full stack web developer
                        based in Berlin. I specialize in building user
                        interfaces using React, Vue, Node, Jest, and more!
                    </h1>
                </MainStyles>
            </Layout>
        </>
    );
};

export default Main;

// Copycopy code to clipboard
export const query = graphql`
    query {
        fileName: file(relativePath: { eq: "images/cactus.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
