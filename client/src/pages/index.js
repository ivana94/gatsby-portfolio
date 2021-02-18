import React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Hero } from "../components/Hero";

const MainStyles = styled.main`
    width: 80vw;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);

    h1 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-90%, -90%);
    }
`;

const SideNoteStyles = styled.div`
    display: flex;
    flex-direction: column;
`;

const UpArrowStyles = styled.span`
    color: red;
`;

const ImageStyles = styled(Img)`
    /* position: absolute; */
    filter: grayscale(100%) blur(2px);
    opacity: 0.5;
    width: 100%;
    height: 50vh;
`;

const PurpleBackgroundDiv = styled.div`
    background: violet;
    opacity: 0.2;
    width: 100%;
    height: 50vh;
`;

const Main = ({ data }) => {
    return (
        <Layout>
            <main>
                <PurpleBackgroundDiv></PurpleBackgroundDiv>
                {/* <Hero /> */}
                {/* <ImageStyles
                    fluid={data.fileName.childImageSharp.fluid}
                ></ImageStyles> */}
                {/* <SideNoteStyles>
                        <span>(she/her)</span>
                        <UpArrowStyles>^</UpArrowStyles>
                    </SideNoteStyles> */}
                <h3 className="text-3xl relative bottom-10">
                    I'm Ivana. I'm a full stack web developer based in Berlin.
                </h3>
            </main>
        </Layout>
    );
};

export default Main;

// Copycopy code to clipboard
export const query = graphql`
    query {
        fileName: file(relativePath: { eq: "me.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
