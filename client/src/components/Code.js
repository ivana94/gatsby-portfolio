import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const Code = ({ node }) => {
    if (!node || !node.code) {
        return null;
    }
    const { language, code } = node;
    console.log("---", code);
    return (
        <SyntaxHighlighter language={language || "text"}>
            {code}
        </SyntaxHighlighter>
    );
};

export default Code;
