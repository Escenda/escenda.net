
import 'styles/templates/auth/logout.style.css';

import { useRunOnce } from 'hooks/useRunOnce';
import { connect } from 'react-redux';
import { logout } from 'redux/auth/auth.actions.js';


const Logout = ({ logout }) => {

    useRunOnce(logout);

    return (
        <section className="logout">
            <p>ログアウトしました</p>
        </section>
    );
}

export default connect(null, { logout })(Logout);