import { ADD_CART, REMOVE_ITEM } from "./type"

export const ADD = (item) => {
    return {
        type: ADD_CART,
        payload: item
    }
}

export const DELETE = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}