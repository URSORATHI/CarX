import axios from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
    const res = await axios.get("/category/getcategory");
    console.log(res);
    if (res.status === 200) {
      const { categoryList } = res.data;
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories: categoryList },
      });
    } else {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const addCategory = (formData) => {
  return async (dispatch) => {
    console.log("iii");
    // for (var [key, value] of form.entries()) {
    //   console.log(key, value);
    // }

    const res = await axios.post("/category/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("hii", res);

    // axios
    //   .post("http://localhost:2000/api/category/create", form)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     let errorObject = JSON.parse(JSON.stringify(error));
    //     console.log(errorObject);
    //     // dispatch(authError(errorObject.response.data.error));
    //   });
    // // dispatch({ type: categoryConstants.ADD_NEW_CATEGORY_REQUEST });
    // try {
    //   console.log("iii");
    //   let data = JSON.stringify({
    //     name: form.get("name"),
    //     parentId: form.get("parentId"),
    //     categoryImage: form.get("categoryImage"),
    //   });
    //   console.log(data);
    //   for (var [key, value] of form.entries()) {
    //     console.log(key, value);
    //   }

    //   const res = await axios.post(`/category/create`, form);

    //   console.log("data");

    //   console.log("bbbb");
    //   for (var [key, value] of form.entries()) {
    //     console.log(key, value);
    //   }

    //   if (res.status === 201) {
    //     console.log("pppp");
    //     dispatch({
    //       type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
    //       payload: { category: res.data.category },
    //     });
    //   } else {
    //     console.log("yyyy");
    //     dispatch({
    //       type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
    //       payload: res.data.error,
    //     });
    //     console.log("yyyy");
    //   }
    // } catch (error) {
    //   console.log(error.response);
    // }
  };
};
