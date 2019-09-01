import { combineReducers } from "redux";
import { PICTURE_FETCH, PICTURE_FETCHED } from "./actions";

const initialState = {
  isLoading: false,
  pictures: []
};

const pictureReducer = (state = initialState, { type, payload }) => {
  // we are missing more actions.......
  switch (type) {
    case PICTURE_FETCH: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default combineReducers({ pics: pictureReducer });
