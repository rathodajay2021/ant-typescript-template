export const ACTION_TYPES = {
  SHOW_SIDEBAR: "SHOW_SIDEBAR",
  HIDE_SIDEBAR: "HIDE_SIDEBAR",
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
  TOGGLE_DRAWER: "TOGGLE_DRAWER",
  SIDEBAR_ACTIVE: "SIDEBAR_ACTIVE",
};

export const showSideBar = () => {
  return {
    type: ACTION_TYPES.SHOW_SIDEBAR,
  };
};

export const hideSideBar = () => {
  return {
    type: ACTION_TYPES.HIDE_SIDEBAR,
  };
};

export const toggleSideBar = () => {
  return {
    type: ACTION_TYPES.TOGGLE_SIDEBAR,
  };
};

export const toggleDrawer = () => {
  return {
    type: ACTION_TYPES.TOGGLE_DRAWER,
  };
};

export const changeCurrent = (current: string[]) => {
  return {
    type: ACTION_TYPES.SIDEBAR_ACTIVE,
    current
  };
};
