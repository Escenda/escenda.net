
import 'styles/addons/markdown/github-markdown.min.css';
import 'styles/templates/blog/index.style.css';


import { useParams } from 'react-router-dom';

import React from 'react';

const LazyContent = React.lazy(() => import('components/organisms/ArticleContent/article-content.component.jsx'));

const ShowContent = () => {
    const { id } = useParams();

    return (
        <section className='blog-show'>
            <LazyContent id={ id } />
        </section>
    )
}

export default ShowContent;