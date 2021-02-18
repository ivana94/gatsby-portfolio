import React from "react";
import { Layout } from "../components/Layout";
import Img from "gatsby-image";

const Projects = ({ data }) => {
    return (
        <>
            <Layout>
                <h1>
                    Hello! I'm Ivana{" "}
                    <span role="img" aria-label="emoji of a hand waving">
                        👋
                    </span>
                </h1>
                {data.projects.nodes.map(
                    ({ body, id, mainImage, slug, title }) => (
                        <div key={id}>
                            <h3>{title}</h3>
                            <Img fluid={mainImage.asset.fluid} alt={title} />
                            <p>{body[0].children[0].text}</p>
                        </div>
                    )
                )}
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
