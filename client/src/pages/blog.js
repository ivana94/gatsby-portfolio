import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Layout } from "../components/Layout";

const IndexWrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
`;

const PostWrapper = styled.div`
    padding: 0 15px;
    width: 30%;

    a {
        text-decoration: none;
    }

    h3 {
        color: #000;
        font-family: Georgia, "New York Times";
        font-weight: 300;
        font-size: 1.5rem;
    }

    p.date-published {
        font-family: sans-serif;
        font-weight: 500;
        color: darkgray;
    }

    p {
        color: #333;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 0.9rem;
    }
`;

const ImageStyles = styled(Img)`
    width: 100%;
    height: 20vh;
`;

const Blog = ({ data }) => {
    return (
        <>
            <Layout>
                <IndexWrapper>
                    {data.posts.nodes.map(
                        ({ id, body, title, publishedAt, slug, mainImage }) => (
                            <PostWrapper key={id}>
                                <Link to={`/blog/${slug.current}`}>
                                    {!!mainImage.asset ? (
                                        <ImageStyles
                                            fluid={mainImage.asset.fluid}
                                            alt={title}
                                        />
                                    ) : null}
                                    <h3>{title}</h3>
                                    <p>{body[0].children[0].text}</p>
                                    <p className="date-published">
                                        {publishedAt}
                                    </p>
                                </Link>
                            </PostWrapper>
                        )
                    )}
                </IndexWrapper>
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
                        fluid(maxWidth: 300) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                author {
                    name
                    image {
                        asset {
                            fluid {
                                base64
                                srcWebp
                                srcSetWebp
                            }
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

export default Blog;
