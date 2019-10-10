import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';

const Problem = ({problem}) => {

    return (
        <>
            {problem.split(",").map((line, i) => (
                <div className={`pre${i}`} id={"pre-problem"} key={i}>
                    <SyntaxHighlighter language="javascript" style={darcula} id={`star${line}`} >
                        {line}
                    </SyntaxHighlighter>
                </div>
            ))}
        </>
    )
}

export default Problem;