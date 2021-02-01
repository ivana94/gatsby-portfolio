import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
// import { PortableText } from "../components/PortableText";

export default ({ data, pageContext }) => {
    const { body, title, publishedAt } = data.allSanityPost.nodes[0];
    const { text } = body[0].children[0];
    const { previous, next } = pageContext;
    console.log("------------------- ", body, title, publishedAt);
    return (
        <Layout>
            {previous && (
                <Link to={`/blog/${previous.slug.current}`}>previous post</Link>
            )}
            {next && <Link to={`/blog/${next.slug.current}`}>next post</Link>}
            {/* <h3>{frontmatter.title}</h3>
            <p>{frontmatter.date}</p> */}
            {/* <PortableText blocks={body}>texrrt</PortableText> */}
        </Layout>
    );
};

// ! = must be a string
export const query = graphql`
    query PostsBySlug($slug: String!) {
        # filtering - retrieve only mdx files with slug passed in
        allSanityPost(filter: { slug: { current: { eq: $slug } } }) {
            nodes {
                id
                title
                publishedAt(fromNow: true)
                body {
                    children {
                        text
                    }
                }
            }
        }
    }
`;
