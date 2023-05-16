import axios from "axios";
import BlogActionTypes from "./blog.types.js";

export const get_articles = () => async dispatch => {
    const access = localStorage.getItem('access');

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };

    if (access !== null) {
        config.headers.Authorization = `Bearer ${access}`;
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/posts/`, config);
        
        dispatch({
            type: BlogActionTypes.GET_ARTICLES,
            payload: res.data
        });

        return true;
    } catch (err) {        
        return false;
    }
};

export const get_article_detail = (id) => async dispatch => {
    const access = localStorage.getItem('access');

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };

    if (access !== null) {
        config.headers.Authorization = `Bearer ${access}`;
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/posts/${id}/`, config);

        return res.data;
    } catch (err) {        
        return false;
    }
};