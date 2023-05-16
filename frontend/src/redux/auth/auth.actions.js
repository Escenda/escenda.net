import axios from "axios";
import AuthActionTypes from "./auth.types.js";

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access') && localStorage.getItem('refresh')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        };
        
        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/token/verify/`, body, config);

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AuthActionTypes.AUTHENTICATED_SUCCESS
                });
            } else {
                try {
                    const refresh = JSON.stringify({ refresh: localStorage.getItem('refresh') });
                    const res = await axios.post(`${process.env.REACT_APP_API_URL}/token/refresh/`, refresh, config);
                    
                    localStorage.setItem('access', res.data.access);

                    dispatch({
                        type: AuthActionTypes.AUTHENTICATED_SUCCESS
                    });
                } catch (err) {
                    dispatch({
                        type: AuthActionTypes.AUTHENTICATED_FAILURE
                    });
                }
            }
        } catch (err) {
            dispatch({
                type: AuthActionTypes.AUTHENTICATED_FAILURE
            });
        }
    } else {
        dispatch({
            type: AuthActionTypes.AUTHENTICATED_FAILURE
        });
    }
};

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/user/get_info/`, config);
            
            dispatch({
                type: AuthActionTypes.USER_LOADED_SUCCESS,
                payload: res.data
            });

            return true;
        } catch (err) {
            dispatch({
                type: AuthActionTypes.USER_LOADED_FAILURE
            });

            return false;
        }
    } else {
        dispatch({
            type: AuthActionTypes.USER_LOADED_FAILURE
        });

        return false;
    }
};

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/token/`, body, config);
        
        dispatch({
            type: AuthActionTypes.LOGIN_SUCCESS,
            payload: res.data
        });

        return dispatch(load_user());
    } catch (err) {
        dispatch({
            type: AuthActionTypes.LOGIN_FAILURE
        });

        return false;
    }
}

export const logout = () => dispatch => {
    dispatch({ type: AuthActionTypes.LOGOUT });
}