import { wishlistConstants } from "../actions/constants";

const initState = {
  wishlistItems: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case wishlistConstants.ADD_TO_WISHLIST:
      state = {
        ...state,
        wishlistItems: action.payload.wishlistItems,
      };
      break;
  }
  return state;
};
