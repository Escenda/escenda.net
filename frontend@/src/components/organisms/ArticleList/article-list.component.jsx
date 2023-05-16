import { } from '../../molecules';

import '../../../styles/organisms/article-list.style.css';

import { connect, useSelector } from 'react-redux';

import { useRunOnce } from '../../../hooks/useRunOnce.js';

import { get_articles } from '../../../redux/blog/blog.actions';
import { Article } from '../../molecules';

import { TextField } from "../../molecules";

const ArticleList = (props) => {
    const { get_articles } = props;

    useRunOnce(get_articles);

    const articles = useSelector((state) => state.blog.articles);

    return (
        <TextField list_style={ true } text={(
            <>
                { articles.map((article) => (
                    <Article key={ article.id } { ...article } />
                )) }
            </>
        )} />
    )
}

export default connect(null, { get_articles })(ArticleList);