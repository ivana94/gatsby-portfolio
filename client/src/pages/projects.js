import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import breakpoints from "../styles/breakpoints";

const ProjectsContainer = styled.div`
    a {
        margin-bottom: 20px;
    }
    @media only screen and ${breakpoints.device.sm} {
        align-items: center;
    }
`;

const ImageStyles = styled(Img)`
    width: 100%;
    height: 20vh;
`;

const Projects = ({ data }) => {
    return (
        <>
            <Layout>
                <ProjectsContainer className="container flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap md:flex-1 lg:flex-1">
                    {data.projects.nodes.map(
                        ({ body, id, mainImage, slug, title }) => (
                            <Link to={`/projects/${slug.current}`}>
                                <div className="mx-5 w-80" key={id}>
                                    <ImageStyles
                                        fluid={mainImage.asset.fluid}
                                        alt={title}
                                    />
                                    <h3 className="my-2 text-2xl font-serif font-medium text-gray-800">
                                        {title}
                                    </h3>
                                    <p className="font-sans text-md text-gray-500">
                                        {body[0].children[0].text}
                                    </p>
                                </div>
                            </Link>
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
                title
                mainImage {
                    asset {
                        fluid(maxWidth: 300) {
                            ...GatsbySanityImageFluid
                        }
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
