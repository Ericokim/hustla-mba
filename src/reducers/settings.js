import { TOGGLE_SETTING, TOGGLE_AUTOPLAY } from "../actions/types";

const initialState = {
  visible: false, // controls if the settings menu is visible or not
  showDots: true,
  coolButtons: false,
  autoplay: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SETTING:
      return {
        ...state,
        [action.payload]: !state[action.payload]
      };
    case TOGGLE_AUTOPLAY:
      return {
        ...state,
        [action.payload]: !state[action.payload]
      };
    default:
      return state;
  }
};
