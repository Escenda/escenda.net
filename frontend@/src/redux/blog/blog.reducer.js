import BlogActionTypes from "./blog.types.js";

const initialState = {
    articles: [],
    has_loaded: false,
    current_page: 1,
    next: null,
    previous: null,
    count: 0,
};

const blogReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case BlogActionTypes.GET_ARTICLES:
            return {
                ...state,
                articles: payload.results,
                has_loaded: true,
                next: payload.next,
                previous: payload.previous,
                count: payload.count
            };
        default:
            return state;
    }
}

export default blogReducer;