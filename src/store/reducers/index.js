import { ADD_USER } from "../constants/action-types";

const initialState = {
  users: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log(action);
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
