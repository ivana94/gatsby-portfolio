import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Code from "./Code";
import Figure from "./Figure";

const BlockRenderer = (props) => {
    const { style = "normal" } = props.node;

    if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
            style,
            {
                className: `text-${
                    5 - level
                }xl bg-purple-400 rounded-sm py-4 pl-5 mb-5`,
            },
            props.children
        );
    }

    if (style === "blockquote") {
        return <blockquote>- {props.children}</blockquote>;
    }

    // Fall back to default handling
    return BlockContent.defaultSerializers.types.block(props);
};

export const serializers = {
    types: {
        authorReference: ({ node }) => <span>{node.author.name}</span>,
        mainImage: Figure,
        code: Code,
        block: BlockRenderer,
    },
};
