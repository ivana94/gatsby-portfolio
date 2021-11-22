import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { device } from "../styles/breakpoints";

const BlogContainer = styled.div`
    @media only screen and ${device.sm} {
        align-items: center;
        a {
            margin: 20px 0;
        }
    }
`;

const ImageStyles = styled(GatsbyImage)`
    width: 100%;
    height: 20vh;
`;

const Blog = ({ data }) => {
    return (
        <>
            <Layout>
                <BlogContainer className="container flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap md:flex-1 lg:flex-1">
                    {data.posts.nodes.map(
                        ({ id, title, slug, mainImage, excerpt }) => (
                            <div className="mx-5 w-80" key={id}>
                                <Link to={`/blog/${slug.current}`}>
                                    {!!mainImage.asset ? (
                                        <ImageStyles
                                            image={
                                                mainImage.asset.gatsbyImageData
                                            }
                                            alt={title}
                                        />
                                    ) : null}
                                    <h3 className="my-2 text-2xl font-serif font-medium text-gray-800">
                                        {title}
                                    </h3>
                                    <p className="font-sans text-md text-gray-500">
                                        {excerpt[0].children[0].text}
                                    </p>
                                </Link>
                            </div>
                        )
                    )}
                </BlogContainer>
            </Layout>
        </>
    );
};

export const query = graphql`
    query {
        posts: allSanityPost {
            nodes {
                id
                title
                publishedAt(fromNow: true)
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
                excerpt {
                    children {
                        text
                    }
                }
            }
        }
    }
`;

export default Blog;
