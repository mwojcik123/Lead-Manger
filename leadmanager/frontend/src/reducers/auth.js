import { USER_LOADED, USER_LOADING, AUTH_ERROR,LOGIN_SUCCES,LOGIN_FAIL,LOGOUT_SUCCES,REGISTER_SUCCES,REGISTER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCES:
    case REGISTER_SUCCES:
        localStorage.setItem("token", action.payload.token);
        return{
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading:false
        }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCES:
    case REGISTER_FAIL:
        localStorage.removeItem("token");
        return{
            ...state,
            token:null,
            user:null,
            isAuthenticated: false,
            isLoading:false
        }
    default:
      return state;
  }
}
