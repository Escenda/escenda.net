
import 'styles/addons/markdown/github-markdown.min.css';
import 'styles/templates/blog/index.style.css';


import React from 'react';

const LazyList = React.lazy(() => import('components/organisms/ArticleList/article-list.component.jsx'));

const BlogIndex = () => {
    return (
        <section className='blog-index'>
            <LazyList />
        </section>
    )
}

export default BlogIndex;