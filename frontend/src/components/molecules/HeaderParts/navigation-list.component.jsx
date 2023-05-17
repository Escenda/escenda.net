import { NavigateButton } from "components/atoms";

import { useLocation } from 'react-router-dom';

import 'styles/molecules/header/navigation-list.style.css';

const NavigationList = ({ pages }) => {
    const location = useLocation();
    const buttonStatus = pages.map((page) => { return page.href === location.pathname ? 'active' : 'inactive' });

    return (
        <div className="navigation-list">
            { pages.map((page, index) => {
                const info = { name: page.name, url: page.href, buttonStatus: buttonStatus[index] }
                return (
                    <NavigateButton key={ index } { ...info } />
                )
            }) }
        </div>
    )
}

export default NavigationList;