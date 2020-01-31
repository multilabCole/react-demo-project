import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(
  state = initialState.users,
  action
) {
  switch (action.type) {
    case types.CREATE_USER:
      return [...state, {...action.user}];
    case types.LOGIN_USER:
      // login user
      return action.user;
    default:
      return state;
  }
}
