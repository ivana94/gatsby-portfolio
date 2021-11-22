import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

const Figure = ({ node }) => {
    const gatsbyImageData = getGatsbyImageData(
        node.asset._ref,
        {
            maxWidth: 800,
        },
        clientConfig.sanity
    );
    return (
        <>
            <figure>
                <GatsbyImage image={gatsbyImageData} alt={node.alt} />
            </figure>
            <caption>{node.caption}</caption>
        </>
    );
};

export default Figure;
