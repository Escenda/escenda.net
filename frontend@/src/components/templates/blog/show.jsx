
import '../../../styles/addons/markdown/github-markdown.min.css';
import '../../../styles/templates/blog/index.style.css';

import { ArticleContent } from '../../organisms/';

import { useParams } from 'react-router-dom';

const ShowContent = () => {
    const { id } = useParams();

    return (
        <section className='blog-show'>
            <ArticleContent id={ id } />
        </section>
    )
}

export default ShowContent;