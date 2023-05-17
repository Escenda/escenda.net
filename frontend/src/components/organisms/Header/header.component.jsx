import { LogoContent, NavigationList } from 'components/molecules';

import 'styles/organisms/header.style.css';

const pages = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Blog',
        href: '/blog'
    },
    {
        name: 'Portfolio',
        href: '/portfolio'
    }
]

const Header = () => {
    return (
        <header className='neumorphism-div' id='navigator'>
            <LogoContent />
            <NavigationList pages={ pages } />
        </header>
    )
}

export default Header;