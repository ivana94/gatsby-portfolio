import React from "react";
import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
// import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "./serializers";

export const PortableText = ({ blocks }) => (
    <BasePortableText
        blocks={blocks}
        serializers={serializers}
        {...clientConfig.sanity}
    />
);
