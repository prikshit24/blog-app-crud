import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name:'Prikshit'},
    {id:'1', name:'Shubham'},
    {id:'2', name:'Nikhil'},
];

const usersSlice = createSlice({
    name:'user',
    initialState,
    reducers:{}
});

export const selecctAllUsers = (state) => state.users;

export default usersSlice.reducer