import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";

export default ({ data, pageContext }) => {
    const { frontmatter, body } = data.mdx;
    const { previous, next } = pageContext;
    return (
        <Layout>
            {previous && <Link to={previous.fields.slug}>previous post</Link>}
            {next && <Link to={next.fields.slug}>next post</Link>}
            <h3>{frontmatter.title}</h3>
            <p class="date-published">{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    );
};

// ! = must be a string
export const query = graphql`
    query PostsBySlug($slug: String!) {
        # filtering - retrieve only mdx files with slug passed in
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
            }
        }
    }
`;
