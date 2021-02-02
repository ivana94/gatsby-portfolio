import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { Layout } from "../components/Layout";
import { PortableText } from "../components/PortableText";
import { serializers } from "../components/serializers";

const BlogPostWrapper = styled.main`
    width: 70%;
    color: #000;
    font-family: "PT Sans", Arial, sans-serif;
    font-size: 1.1rem;
`;

const H3Styles = styled.h3`
    color: #333;
    font-family: "PT Sans", Arial, sans-serif;
    font-size: 2rem;
`;

const ParagraphStyles = styled.p`
    color: #333;
    font-family: "PT Sans", Arial, sans-serif;
    font-size: 1rem;
`;

const ImageStyles = styled(Img)`
    width: 100%;
    height: 50vh;
`;

const BlogPostTemplate = ({ data, pageContext }) => {
    const { body, title, publishedAt, mainImage } = data.allSanityPost.nodes[0];
    const { previous, next } = pageContext;
    console.log(mainImage);
    return (
        <Layout>
            {previous && (
                <Link to={`/blog/${previous.slug.current}`}>previous post</Link>
            )}
            {next && <Link to={`/blog/${next.slug.current}`}>next post</Link>}
            <ImageStyles fluid={mainImage.asset.fluid} alt={title} />
            <H3Styles>{title}</H3Styles>
            <ParagraphStyles>published {publishedAt}</ParagraphStyles>
            <BlogPostWrapper>
                {!!body.length &&
                    body.map((block, idx) => (
                        <PortableText
                            blocks={block}
                            serializers={serializers}
                            key={idx}
                        ></PortableText>
                    ))}
            </BlogPostWrapper>
        </Layout>
    );
};

// ! = must be a string
export const query = graphql`
    query PostsBySlug($slug: String!) {
        # filtering - retrieve only mdx files with slug passed in
        allSanityPost(filter: { slug: { current: { eq: $slug } } }) {
            nodes {
                _key
                _type
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
                body {
                    _key
                    _type
                    _rawChildren
                    style
                    list
                    children {
                        text
                        _type
                        _key
                    }
                }
            }
        }
    }
`;

export default BlogPostTemplate;
