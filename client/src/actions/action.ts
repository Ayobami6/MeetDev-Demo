import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    try {
      // Perform the API call here, e.g., using fetch or Axios
      const response = await fetch("/api/data"); // Adjust the API endpoint
      const data = await response.json();

      // Dispatch the success action with the received data
      dispatch({
        type: ActionTypes.FETCH_DATA_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      // Dispatch an error action if the API call fails
      dispatch({
        type: ActionTypes.FETCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
