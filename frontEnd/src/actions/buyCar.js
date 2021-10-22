import axios from "../helpers/axios";
import { buyCarConstants } from "./constants";

export const orderCar = (form) => {
  return async (dispatch) => {
    try {
      dispatch({ type: buyCarConstants.ADD_TO_ORDER_REQUEST });
      const res = await axios.post(`getOrders`, form);
      if (res.status === 201) {
        dispatch({ type: buyCarConstants.ADD_TO_ORDER_SUCCESS });
      } else {
        dispatch({ type: buyCarConstants.ADD_TO_ORDER_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
