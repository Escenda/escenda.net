import { useNavigate } from 'react-router-dom';
import '../../../styles/molecules/Article/article.style.css';

const Article = (props) => {
    const { id, author, title, description, tags, category } = props;

    const navigate = useNavigate();

    const handleClick = (event) => {
        navigate(`/blog/post/${id}/`)
    }

    return (
        <article onClick={ handleClick } className="neumorphism-div">
            <div className='article-header'>
                <div className='neumorphism-inset icon-set'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>
                    <p>{ category }</p>
                </div>
                <div className='neumorphism-inset icon-set'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                    { tags.map((tag) => (
                        <p key={ tag }>{ tag }</p>
                    )) }
                </div>
            </div>
            <div className='article-content'>
                <p className='title'>{ title }</p>
                <p className='description'>{ description }</p>
            </div>
            <div className='article-footer'>
                <div className='neumorphism-inset icon-set'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg>
                    <p>{ author }</p>
                </div>
            </div>
        </article>
    )
}

export default Article;