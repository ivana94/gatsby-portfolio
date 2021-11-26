import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { device } from "../styles/breakpoints";

const ProjectsContainer = styled.div`
    a {
        margin-bottom: 20px;
    }
    @media only screen and ${device.sm} {
        align-items: center;
    }
`;

const ImageStyles = styled(GatsbyImage)`
    width: 100%;
    height: 20vh;
`;

const Projects = ({ data }) => {
    return (
        <>
            <Layout>
                <ProjectsContainer className="container flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap md:flex-1 lg:flex-1">
                    {data.projects.nodes.map(
                        ({ body, id, link, mainImage, slug, title }) => (
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={link}
                                key={id}
                            >
                                <div className="mx-5 w-80">
                                    <ImageStyles
                                        image={mainImage.asset.gatsbyImageData}
                                        alt={title}
                                    />
                                    <h3 className="my-2 text-2xl font-serif font-medium text-gray-800">
                                        {title}
                                    </h3>
                                    <p className="font-sans text-md text-gray-500">
                                        {body[0].children[0].text}
                                    </p>
                                </div>
                            </a>
                        )
                    )}
                </ProjectsContainer>
            </Layout>
        </>
    );
};

export const query = graphql`
    query {
        projects: allSanityProject {
            nodes {
                id
                link
                title
                mainImage {
                    asset {
                        gatsbyImageData
                    }
                }
                slug {
                    current
                }
                body {
                    children {
                        text
                    }
                }
            }
        }
    }
`;

export default Projects;
