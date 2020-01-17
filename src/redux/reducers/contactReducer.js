import {
  FETCH_CONTACT,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILURE
} from "../constants";


export const initialState = {
  isLoading: false,
  data: [],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACT:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };

    case FETCH_CONTACT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
