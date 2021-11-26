import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const Code = ({ node }) => {
    if (!node || !node.code) {
        return null;
    }
    const { language, code } = node;
    return (
        <SyntaxHighlighter language={language || "text"} className="mb-5">
            {code}
        </SyntaxHighlighter>
    );
};

export default Code;
