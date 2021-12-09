import {ADD_TO_CART, REMOVE_ITEMS} from "../actions/types";

const initialState = [];

 function itemsReducer(items = initialState, action){
    const {type, payload} = action
    switch (type){
        case ADD_TO_CART:
        return[...items, payload]
        case REMOVE_ITEMS:
            return items.filter(item=>item._id !== payload)
        default:
            return items

    }
}

export default itemsReducer