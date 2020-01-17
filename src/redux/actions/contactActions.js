import {
  FETCH_CONTACT,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILURE
} from "../constants";

export const getContact = () => ({
  type: FETCH_CONTACT
});
export const getContactSuccess = contactDetails => ({
  type: FETCH_CONTACT_SUCCESS,
  payload: contactDetails
});
export const getContactFailure = error => ({
  type: FETCH_CONTACT_FAILURE,
  payload: error
});
