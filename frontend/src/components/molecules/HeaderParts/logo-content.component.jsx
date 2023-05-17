import { NavLink } from 'react-router-dom';

import 'styles/molecules/header/logo-content.style.css';

const LogoContent = () => {

    return (
        <div className="neumorphism-div logo-content">
            <NavLink to="/" className="disable-decoration">
                <img src="/logo192.png" alt="logo" />
                <p className="logo-name">羽毛田玄白</p>
            </NavLink>
        </div>
    )
}

export default LogoContent;