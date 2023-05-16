import React from 'react';

import '../../../styles/molecules/TextField/text-field.style.css';

const TextField = (props) => {
    const { text, list_style } = props;

    return (
        <>
            {
                list_style ? (
                    <ol className="neumorphism-inset-dark neumorphism-scroll article-list">
                        { text }
                    </ol>
                ) : (
                    <article className="neumorphism-inset-dark neumorphism-scroll markdown-body">
                        { text }
                    </article>
                )
            }
        </>
    )
}

export default TextField;