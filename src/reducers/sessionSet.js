import {
  ADD_ARTICLE_SESSION_SET
  } from '../constants/actionTypes';
  
  export default (state = new Set(), action) => {
    switch (action.type) {
      case ADD_ARTICLE_SESSION_SET:
        return new Set(state).add(action.id) // ¯\_(ツ)_/¯ should add immutable js
      default:
        return state;
    }
  };
  