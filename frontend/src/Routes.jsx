import { Route, Routes } from 'react-router-dom';

import Blog from './components/templates/blog/index.jsx';
import Home from './components/templates/home/index.jsx';
import Portfolio from './components/templates/portfolio/index.jsx';

import ArticleContent from './components/templates/blog/show.jsx';

import Login from './components/templates/auth/login.jsx';
import Logout from './components/templates/auth/logout.jsx';

const PagesRoute = () => {
  return (
    <Routes>
      <Route path='*' element='404' />
      <Route path='/' element={ <Home /> } />
      <Route path='/blog'>
        <Route path='*' element='404' />
        <Route path='' element={ <Blog /> } />
        <Route path='post/:id/' element={ <ArticleContent /> } />
      </Route>
      <Route path='/portfolio' element={ <Portfolio /> } />
      <Route path='/auth'>
        <Route path='*' element='404' />
        <Route path='login' element={ <Login /> } />
        <Route path='logout' element={ <Logout /> } />
      </Route>
    </Routes>
  )
}

export default PagesRoute;