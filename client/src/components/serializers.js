import React from "react";
import Code from "./Code";
import Figure from "./Figure";

export const serializers = {
    types: {
        authorReference: ({ node }) => <span>{node.author.name}</span>,
        mainImage: Figure,
        code: Code,
    },
};
