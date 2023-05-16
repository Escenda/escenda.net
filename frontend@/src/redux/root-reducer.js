import { combineReducers } from "redux";

import authReducer from "./auth/auth.reducer.js";
import blogReducer from "./blog/blog.reducer.js";

const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
});

export default rootReducer;