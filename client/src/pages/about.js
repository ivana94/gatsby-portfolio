import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import { serializers } from "../components/serializers";
import { PortableText } from "../components/PortableText";

const About = ({ data }) => {
    const { _rawBody } = data.allSanityAbout.nodes[0];
    return (
        <>
            <Layout>
                <div className="container flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap md:flex-1 lg:flex-1">
                    <PortableText
                        blocks={_rawBody}
                        serializers={serializers}
                    ></PortableText>
                </div>
            </Layout>
        </>
    );
};

export const query = graphql`
    query {
        allSanityAbout {
            nodes {
                _rawBody
                body {
                    children {
                        text
                    }
                }
            }
        }
    }
`;

export default About;
