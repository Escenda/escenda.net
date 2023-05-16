import React from 'react';
import { Route } from 'react-router-dom';

const RouteGuard = ({ component: Component, ...rest }) => {
    const hasJWT = () => {
        let flag = false;
        localStorage.getItem('token') ? flag = true : flag = false;
        return flag;
    }
    
    console.log(hasJWT());

    return (
        <Route { ...rest }
            render = { props => (
                hasJWT() ?
                    <Component { ...props } />
                    :
                    <redirect to={{ pathname: '/login' }} />
            )}
        />
    )
}

export default RouteGuard;