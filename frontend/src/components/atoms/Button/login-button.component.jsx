const LoginButton = (props) => {
    const { name } = props;

    const handleClick = (event) => {
        const label = event.target.closest('label');
        if (!label) return;
        const cannot_press = Array.from(event.target.classList).includes('cannot-press');
        if (cannot_press) return;
        if (!props.clickHandler) return;
        props.clickHandler();
    }

    return (
        <div type='submit' onClick={ handleClick } className={ 'neumorphism-btn' }>
            <input type='checkbox' id={ 'btn-auth-signin' } className='visually-hidden' />
            <label htmlFor={ 'btn-auth-signin' } className='content-wrapper'>
                <p>{ name }</p>
            </label>
        </div>
    )
}

export default LoginButton;