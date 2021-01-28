import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
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

const Image = styled(Img)`
    width: 100%;
    height: 20vh;
`;

export default ({ data }) => {
    const { posts } = useStaticQuery(graphql`
        query {
            posts: allSanityPost {
                nodes {
                    id
                    title
                    publishedAt
                    body {
                        children {
                            text
                        }
                    }
                    author {
                        children {
                            id
                        }
                        name
                    }
                }
            }
        }
    `);
    console.log("------- ", posts);
    return (
        <>
            <Layout>
                <IndexWrapper>
                    {/* {data.allMdx.nodes.map(
                        ({ id, excerpt, frontmatter, fields }) => (
                            <PostWrapper key={id}>
                                <Link to={`/blog${fields.slug}`}>
                                    {!!frontmatter.cover ? (
                                        <Image
                                            fluid={
                                                frontmatter.cover
                                                    .childImageSharp.fluid
                                            }
                                        />
                                    ) : null}
                                    <h3>{frontmatter.title}</h3>
                                    <p>{excerpt}</p>
                                    <p className="date-published">
                                        {frontmatter.date}
                                    </p>
                                </Link>
                            </PostWrapper>
                        )
                    )} */}
                </IndexWrapper>
            </Layout>
        </>
    );
};

// export const query = graphql`
//     query SITE_INDEX_QUERY {
//         allMdx(
//             sort: { fields: [frontmatter___date], order: DESC }
//             filter: { frontmatter: { published: { eq: true } } }
//         ) {
//             nodes {
//                 id
//                 excerpt(pruneLength: 250)
//                 frontmatter {
//                     title
//                     date(formatString: "YYYY MMMM Do")
//                     cover {
//                         publicURL
//                         childImageSharp {
//                             fluid {
//                                 ...GatsbyImageSharpFluid
//                             }
//                         }
//                     }
//                 }
//                 fields {
//                     slug
//                 }
//             }
//         }
//     }
// `;
