import { Route, Routes } from 'react-router-dom';

import { TextField } from './components/molecules/index.js';

import Login from './components/templates/auth/login.jsx';
import Logout from './components/templates/auth/logout.jsx';

import React, { Suspense } from 'react';

const LazyHome = React.lazy(() => import('./components/templates/home/index.jsx'));
const LazyBlogIndex = React.lazy(() => import('./components/templates/blog/index.jsx'));
const LazyBlogShow = React.lazy(() => import('./components/templates/blog/show.jsx'));
const LazyPortfolio = React.lazy(() => import('./components/templates/portfolio/index.jsx'));

const PagesRoute = () => {
  return (
    <Suspense fallback={ <TextField text={ '' } /> }>
      <Routes>
        <Route path='*' element='404' />
        <Route path='/' element={ <LazyHome /> } />
        <Route path='/blog'>
          <Route path='*' element='404' />
          <Route path='' element={ <LazyBlogIndex /> } />
          <Route path='post/:id/' element={ <LazyBlogShow /> } />
        </Route>
        <Route path='/portfolio' element={ <LazyPortfolio /> } />
        <Route path='/auth'>
          <Route path='*' element='404' />
          <Route path='login' element={ <Login /> } />
          <Route path='logout' element={ <Logout /> } />
        </Route>
      </Routes>
    </Suspense>
    )
}

export default PagesRoute;