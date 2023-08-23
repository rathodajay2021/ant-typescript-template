import { ACTION_TYPES } from "./Actions";

type actionType = {
  type: String;
  accessToken: string;
  userInfo: {};
};

type initStateType = {
  isLoggedIn: boolean;
  userInfo: {};
  accessToken: string | null;
  language: {
    languageId: Number;
    languageCode: string;
  };
};

const storedUserInfo = localStorage.getItem("userInfo");
const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};

const loggedInStatus = localStorage.getItem("isLoggedIn");

const initState: initStateType = {
  isLoggedIn: loggedInStatus ? JSON.parse(loggedInStatus) : false,
  userInfo,
  accessToken: localStorage.getItem("accessToken"),
  language: {
    languageId: 1,
    languageCode: "en",
  },
};

const Reducer = (state = initState, action: actionType) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_USER:
      return {
        ...state,
        userInfo: action.userInfo,
        accessToken: action.accessToken,
        isLoggedIn: true,
      };

    case ACTION_TYPES.LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: {},
        accessToken: null,
      };

    default:
      return state;
  }
};

export default Reducer;
