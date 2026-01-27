import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./ActionType";

export const fetchStart = () => ({
  type: FETCH_START,
});

export const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload,
});
