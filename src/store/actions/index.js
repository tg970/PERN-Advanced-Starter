import { ADD_USER } from "../constants/action-types";

export const addUser = user => ({ type: ADD_USER, payload: user });
