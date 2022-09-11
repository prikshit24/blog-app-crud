import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../Features/Posts/postSlice';
import userReducer from '../Features/Users/userSlice';

export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: userReducer
    }
})