import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { Layout } from "../components/Layout";
import { Arrows } from "../components/Arrows";
import { PortableText } from "../components/PortableText";
import { serializers } from "../components/serializers";

const BlogPostWrapper = styled.section`
    color: #000;
    font-family: "PT Sans", Arial, sans-serif;
    font-size: 1.1rem;

    p {
        font-size: 1.2rem;
        margin-bottom: 5vh;
        line-height: 1.5rem;
        color: #444;
    }
`;

const H3Styles = styled.h3`
    color: #333;
    font-family: "PT Sans", Arial, sans-serif;
    font-size: 2rem;
`;

const ImageStyles = styled(Img)`
    width: 100%;
    height: 60vh;
    border-radius: 5px;
`;

const BlogPostTemplate = ({ data, pageContext }) => {
    const {
        title,
        publishedAt,
        mainImage,
        _rawBody,
    } = data.allSanityPost.nodes[0];
    const { previous, next } = pageContext;
    return (
        <Layout>
            <Arrows next={next} previous={previous} />
            <ImageStyles fluid={mainImage.asset.fluid} alt={title} />
            <div className="container w-8/12">
                <h3 className="text-3xl tracking-wide my-5">{title}</h3>
                <p className="text-gray-500 mb-5">published {publishedAt}</p>
                <BlogPostWrapper>
                    <PortableText
                        blocks={_rawBody}
                        serializers={serializers}
                    ></PortableText>
                </BlogPostWrapper>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query PostsBySlug($slug: String!) {
        # filtering - retrieve only mdx files with slug passed in
        allSanityPost(filter: { slug: { current: { eq: $slug } } }) {
            nodes {
                _key
                _type
                _rawBody
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
            }
        }
    }
`;

export default BlogPostTemplate;
