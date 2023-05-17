import React from 'react';
import 'styles/templates/home/index.style.css';

const LazyHome = React.lazy(() => import('components/pages/home/index.jsx'));

const Home = () => {
    return (
        <section className='home'>
            <LazyHome />
        </section>
    )   
}

export default Home;