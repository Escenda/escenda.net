import { TextField } from "../../molecules";

import { connect } from "react-redux";
import { get_article_detail } from "../../../redux/blog/blog.actions.js";

import { useEffect, useState } from 'react';
import { unified } from 'unified';
// markdown をパースする
import remarkParse from 'remark-parse';
// Support GFM (tables, autolinks, tasklists, strikethrough)
import remarkGfm from 'remark-gfm';
// HTML に変換する
import remarkRehype from 'remark-rehype';
// ハイライト
import rehypeHighlight from 'rehype-highlight';
// HTML にシリアライズ
import rehypeStringify from 'rehype-stringify';
// TOC

import { useRunOnce } from "../../../hooks/useRunOnce";

const parseMarkdown = async (text) => {
    const file = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(text);
        // VText が返されるので String にして返す
    return String(file);
};

const ArticleContent = (props) => {
    const { id } = props;

    const { get_article_detail } = props;

    const [article, setArticle] = useState({});

    const [parsedContent, setParsedContent] = useState('');

    const getArticleDetail = async () => {
        const article = await get_article_detail(id);
        setArticle(article);
    };

    const getContent = async () => {
        if (!article.content) return;
        const htmlString = await parseMarkdown(article.content);
        setParsedContent(htmlString);
    };

    useRunOnce(getArticleDetail);

    useEffect(() => {
        getContent();
    }, [article]);
    
    return (
        <>
            <TextField text={(
                <>
                    <h1>{ article.title }</h1>
                    <h2>{ article.description }</h2>
                    <br />
                    { parsedContent ? (
                        <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
                    ) : (
                        <p>読み込んでいます...</p>
                    ) }
                </>
            )} />
        </>
    )
}

export default connect(null, { get_article_detail })(ArticleContent);