import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import wishlistReducer from "./wishlist.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
