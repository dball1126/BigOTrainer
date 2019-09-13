import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from 'react';
export const Component2 = () => {
    const codeString = '(num) => num + 1';
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
            <lineNumberStyle>
            {codeString}
            </lineNumberStyle>
        </SyntaxHighlighter>
    );
};