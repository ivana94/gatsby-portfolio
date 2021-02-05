import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

const Figure = ({ node }) => {
    const fluidProps = getFluidGatsbyImage(
        node.asset._id,
        { maxWidth: 670 },
        ...clientConfig.sanity
    );
    return (
        <figure>
            <Img fluid={fluidProps} alt={node.alt} />
            <caption>{node.caption}</caption>
        </figure>
    );
};

export default Figure;
