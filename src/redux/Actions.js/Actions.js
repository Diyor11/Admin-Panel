import axios from "axios";
import { ActionTypes } from "../ActionTypes.js/ActionTypes";

export const setBgMode = mode => {
    return{
        type: ActionTypes.SET_MODE,
        payload: mode
    }
};

export const setBgColor = theme => {
    return{
        type: ActionTypes.SET_THEME,
        payload: theme
    }
};

export const setBgColorHover = theme => {
    return{
        type: ActionTypes.SET_THEME_HOVER,
        payload: theme
    }
}

export const setLanguage = language => {
    return{
        type: ActionTypes.SET_LANGUAGE,
        payload: language
    }
}

export const fetchData = () => {
    return async function(dispatch) {
        const response = await axios.get('https://fakestoreapi.com/products')
        dispatch({type: ActionTypes.FETCH_DATA, payload: response.data })
    }
};

export const selectProduct = (id) => {
    return async function(dispatch) {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        dispatch({type: ActionTypes.SELECT_PRODUCT, payload: response.data })
    }
};

export const removeSelectedProduct = () => {
    return{type: ActionTypes.REMOVE_SELECTED_PRODUCT};
};

export const select = () => {
    return{type: ActionTypes.SELECT}
}

