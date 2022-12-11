import { CREATE_POST } from "../types/types";
import { DELETE_POST } from "../types/types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  }
}
