import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {
        id: 1,
        title: 'Redus Tutorial',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda voluptatibus maxime perferendis consequuntur molestiae maiores at vero doloremque voluptatum.',
        date: sub(new Date(), {minutes: 10}).toISOString(),
    },
    {
        id: 2,
        title: 'Blog App',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda voluptatibus maxime perferendis consequuntur molestiae maiores at vero doloremque voluptatum.',
        date: sub(new Date(), {minutes: 5}).toISOString(),
    },
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date:new Date().toISOString(),
                        userId
                    }
                }
            }
        }
    }
});

export const selecctAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions

export default postSlice.reducer;