import store from "../store";
import { wishlistConstants } from "../actions/constants";

export const addToWishlist = (product) => {
  return async (dispatch) => {
    const { cartItems } = store.getState().wishlist;

    cartItems[product._id] = {
      ...product,
    };

    // localStorage.setItem('wishlist', JSON.stringify(products));
    dispatch({
      type: wishlistConstants.ADD_TO_WISHLIST,
      payload: {
        cartItems,
      },
    });
  };
};
