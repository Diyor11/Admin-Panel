
import { ActionTypes } from '../ActionTypes.js/ActionTypes';
const initialState = {
    products: [],
    selectProduct: {},
    select: false
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_DATA:
            return{
                ...state,
                products: [...payload]
            };
        case ActionTypes.SELECT_PRODUCT:
            return{
                ...state,
                selectProduct: payload
            }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return{
                ...state,
                selectProduct: {}
            }
        case ActionTypes.SELECT: 
            return{
                ...state,
                select: true
            }
        default:
            return state;
    }
} 