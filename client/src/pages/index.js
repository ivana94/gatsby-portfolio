import React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const ImageStyles = styled(Img)`
    /* position: absolute; */
    filter: grayscale(100%) blur(2px);
    opacity: 0.5;
    width: 100%;
    height: 50vh;
`;

const Main = ({ data }) => {
    return (
        <Layout>
            <main>
                {/* <ImageStyles
                    fluid={data.fileName.childImageSharp.fluid}
                ></ImageStyles> */}
                <h3 className="text-4xl relative bottom-10">
                    I'm a Software Engineer based in New York.
                </h3>
            </main>
        </Layout>
    );
};

export default Main;

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
