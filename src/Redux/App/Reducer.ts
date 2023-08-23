import { ACTION_TYPES } from "./Actions";

type actionType = {
  type: string;
  current: string[];
};

type initStateType = {
  collapsed: boolean;
  openDrawer: boolean;
  current: string[] | undefined;
};

const initState: initStateType = {
  collapsed: window.innerWidth > 1220 ? false : true,
  openDrawer: false,
  current: ["dashboard"],
};

const Reducer = (state = initState, action: actionType) => {
  switch (action.type) {
    case ACTION_TYPES.HIDE_SIDEBAR:
      return { ...state, collapsed: true };
    case ACTION_TYPES.SHOW_SIDEBAR:
      return { ...state, collapsed: false };
    case ACTION_TYPES.TOGGLE_SIDEBAR:
      return { ...state, collapsed: !state.collapsed };
    case ACTION_TYPES.TOGGLE_DRAWER:
      return { ...state, openDrawer: !state.openDrawer };
    case ACTION_TYPES.SIDEBAR_ACTIVE:
      return { ...state, current: action.current };
    default:
      return state;
  }
};

export default Reducer;
