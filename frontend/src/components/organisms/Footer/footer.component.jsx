import { Copyright, ProfileDetails } from 'components/molecules';

import 'styles/organisms/footer.style.css';

import { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { checkAuthenticated, load_user } from 'redux/auth/auth.actions';

import { useRunOnce } from 'hooks/useRunOnce.js';

import { NavigateButton } from 'components/atoms';

const Footer = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('none');

    const auth = useSelector((state) => state.auth);

    const { checkAuthenticated, load_user } = props;
    
    useRunOnce(checkAuthenticated);
    useRunOnce(load_user);

    useEffect(() => {
        setIsAuthenticated(auth.isAuthenticated);
        if (auth.user !== null)
        setUsername(auth.user.username);
    }, [auth]);

    return (
        <footer className='neumorphism-div'>
            <ProfileDetails username={ username } isAuthenticated={ isAuthenticated } />
            <Copyright />
            { isAuthenticated ? (
                <NavigateButton name={ <svg className="logout" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg> } url='/auth/logout' />
            ) : (
                <NavigateButton name={ <svg className="login" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg> } url='/auth/login' />
            )}
        </footer>
    )
}

export default connect(null, { checkAuthenticated, load_user })(Footer);