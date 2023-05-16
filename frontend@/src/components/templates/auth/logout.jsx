
import '../../../styles/templates/auth/logout.style.css';

import { connect } from 'react-redux';
import { useRunOnce } from '../../../hooks/useRunOnce';
import { logout } from '../../../redux/auth/auth.actions.js';


const Logout = ({ logout }) => {

    useRunOnce(logout);

    return (
        <section className="logout">
            <p>ログアウトしました</p>
        </section>
    );
}

export default connect(null, { logout })(Logout);