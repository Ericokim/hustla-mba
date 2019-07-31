import {
  GET_IMAGES_SUCCESS,
  GET_IMAGES_DONE,
  SET_TRANSLATE_VALUE,
  SET_INDEX,
  GET_IMAGES_FAILED
} from "../actions/types";

const initialState = {
  items: [],
  index: 0,
  translateValue: 0,
  isLoading: false,
  isError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES_SUCCESS:
    return { ...state, }

    case GET_IMAGES_DONE:
      return {
        ...state,
        isLoading: false,
        items: [...state.items, ...action.payload]
      };

    case GET_IMAGES_FAILED:
      return { ...state, isLoading: false, isError: true };

    case SET_TRANSLATE_VALUE:
      return { ...state, translateValue: action.payload };
    case SET_INDEX:
      return { ...state, index: action.payload };

    default:
      return state;
  }
};
