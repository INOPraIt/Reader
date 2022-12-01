import { CREATE_POST } from "./types";

const initialState = { 
  posts: [],
}

export const createPostreducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload]}
    default:
      return state;
  }
  return state;
}