import axios from "axios";
import {
  GET_IMAGES_SUCCESS,
  GET_IMAGES_DONE,
  SET_TRANSLATE_VALUE,
  SET_INDEX,
  TOGGLE_AUTOPLAY,
  TOGGLE_SETTING,
  GET_IMAGES_FAILED
} from "./types";

/* Action Creators */
export const getImagesSuccess = () => {
  return {
    type: GET_IMAGES_SUCCESS
  };
};

export const getImagesDone = data => ({
  type: GET_IMAGES_DONE,
  payload: data
});

export const getImagesFailed = () => ({
  type: GET_IMAGES_FAILED
});

export const setTranslateValue = value => {
  return {
    type: SET_TRANSLATE_VALUE,
    payload: value
  };
};

export const setIndex = value => {
  return {
    type: SET_INDEX,
    payload: value
  };
};

export const toggleAutoplay = isActive => {
  return {
    type: TOGGLE_AUTOPLAY,
    payload: isActive
  };
};

export function toggleSetting(settingName) {
  console.log(settingName);
  return {
    type: TOGGLE_SETTING,
    payload: settingName
  };
}

const base = "https://api.punkapi.com/v2/beers";

export const getSliderImages = () => dispatch => {
  dispatch(getImagesSuccess());

  return axios
    .get(`${base}`)
    .then(res => res.data)
    .then(data => {
      dispatch(getImagesDone(data));
    })
    .catch(error => {
      dispatch(getImagesFailed(error));
    });
};
