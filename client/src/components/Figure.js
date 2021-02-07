import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

const Figure = ({ node }) => {
    const fluidProps = getFluidGatsbyImage(
        node.asset._ref,
        {
            maxWidth: 670,
        },
        clientConfig.sanity
    );
    return (
        <>
            <figure>
                <Img fluid={fluidProps} alt={node.alt} />
            </figure>
            <caption>{node.caption}</caption>
        </>
    );
};

export default Figure;
