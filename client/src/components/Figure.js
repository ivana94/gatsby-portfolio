import React from "react";

const Figure = ({ node }) => {
    <figure>
        <img src={urlFor(node.asset).width(600).url()} alt={node.alt} />

        <figcaption>{node.caption}</figcaption>
    </figure>;
};

export default Figure;
