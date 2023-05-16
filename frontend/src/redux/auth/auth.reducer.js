import AuthActionTypes from "./auth.types.js";

const initialState = {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: null,
    user: null,
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AuthActionTypes.LOGIN_SUCCESS:
            localStorage.setItem("access", payload.access);
            localStorage.setItem("refresh", payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh,
            };
        case AuthActionTypes.USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload,
            };
        case AuthActionTypes.USER_LOADED_FAILURE:
            return {
                ...state,
                user: null,
            };
        case AuthActionTypes.AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case AuthActionTypes.AUTHENTICATED_FAILURE:
        case AuthActionTypes.LOGIN_FAILURE:
        case AuthActionTypes.LOGOUT:
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                refresh: null,
                user: null,
            };
        default:
            return state;
    }
}

export default authReducer;