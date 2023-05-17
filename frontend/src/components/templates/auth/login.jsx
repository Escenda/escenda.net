import { LoginButton } from 'components/atoms';

import 'styles/templates/auth/login.style.css';

import { useState } from 'react';
import { connect } from 'react-redux';
import { login } from 'redux/auth/auth.actions.js';

import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const res = login(username, password);
        res.then((res) => {
            if (res !== true) return;
            navigate('/');
        });
    };

    return (
        <section className="login">
            <div className="login-form neumorphism-div">
                <h2>ログイン画面</h2>
                <form>
                    <input
                        className="neumorphism-inset txt_field"
                        type="text"
                        name="username"
                        value={username}
                        onChange={(event) => handleChange(event)}
                        placeholder="ユーザー名"
                        required
                    />
                    <input
                        className="neumorphism-inset txt_field"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => handleChange(event)}
                        placeholder="パスワード"
                        required
                    />
                    <LoginButton clickHandler={ handleSubmit } name='サインイン' />
                </form>
            </div>
        </section>
    );
}

export default connect(null, { login })(Login);