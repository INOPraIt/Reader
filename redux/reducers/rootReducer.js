import { combineReducers } from "redux";
import { createPostreducer } from "./createPostReducer";

export const rootReducer = combineReducers({
  posts: createPostreducer
})