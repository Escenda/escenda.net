import { useNavigate } from 'react-router-dom';

const NavigateButton = (props) => {
    const { name, url, buttonStatus } = props;
    const navigate = useNavigate();

    const handleClick = (event) => {
        const label = event.target.closest('label');
        if (!label) return;
        const cannot_press = Array.from(event.target.classList).includes('cannot-press');
        if (cannot_press) return;
        if (buttonStatus === 'active') return;
        if (url === undefined) return;
        navigate(url);
    }

    return (
        <div onClick={ handleClick } className={ 'neumorphism-btn navigation-item ' + buttonStatus } data-url={ url }>
            <input type='checkbox' id={ 'btn-nav-' + name } className='visually-hidden' />
            <label htmlFor={ 'btn-nav-' + name } className='content-wrapper'>
                <p>{ name }</p>
            </label>
        </div>
    )
}

export default NavigateButton;