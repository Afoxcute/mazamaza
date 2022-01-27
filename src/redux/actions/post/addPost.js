import {ADD_POST} from "../../types";

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: {
        id: post.id,
        userName: post.userName,
        text: post.text,
    }
  }
}

