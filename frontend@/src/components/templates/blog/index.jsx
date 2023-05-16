
import '../../../styles/addons/markdown/github-markdown.min.css';
import '../../../styles/templates/blog/index.style.css';

import { ArticleList } from '../../organisms/';

const BlogIndex = () => {
    return (
        <section className='blog-index'>
            <ArticleList />
        </section>
    )
}

export default BlogIndex;