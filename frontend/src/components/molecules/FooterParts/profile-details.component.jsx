const ProfileDetails = (props) => {

    const { isAuthenticated, username } = props;
    
    return (
        <div className='profile-details neumorphism-div'>
            { isAuthenticated ? (
                <>
                    <img src='/user.png' alt='profileImg' />
                    <div className='profile-description'>
                        <p>{ username }</p>
                    </div>
                </>
            ) : (
                <p>ログインしていません</p>
            )}
        </div>
    )
}

export default ProfileDetails;