import { CREATE_POST, DELETE_POST } from "../types/types";

const initialState = { 
  posts: [],
}

export const postReducer = (s = initialState, a) => {
  switch (a.type) {
    case CREATE_POST:
      return { ...s, posts: [...s.posts, a.payload]}
    case DELETE_POST:
      return { ...s, posts: s.posts.filter(post => post.id !== a.id)}
    default:
      return s;
  }
}
