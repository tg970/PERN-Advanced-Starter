/* eslint-disable */
import { ADD_USER } from "../constants/action-types.js";

const initialState = {
  users: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      // console.log(typeof action.payload);
      if (!action.payload.length) {
        return {
          ...state,
          users: [
            ...state.users,
            action.payload,
          ]
        };
      }
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
