import {ADD_TO_CART, INCREMENT_ITEMS, DECREMENT_ITEMS, REMOVE_ITEMS} from "./types";

export const addToCart = (item) =>  (dispatch) => {
    try {
        dispatch({
            type: ADD_TO_CART,
            payload: item,
        });
    } catch (err) {
        console.log(err);
    }
};
export const removeItem = (id) =>  (dispatch) => {
    try {
        dispatch({
            type: REMOVE_ITEMS,
            payload: id,
        });
    } catch (err) {
        console.log(err);
    }
};

