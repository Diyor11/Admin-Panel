import { ActionTypes } from "../ActionTypes.js/ActionTypes";

const iniTialState = {
    mode: 'light-background',
    theme: 'blue-color',
    themeHover: 'blue-color-hover'
};

export const ThemeReducer = (state = iniTialState, { type, payload }) => {
    switch(type){
        case ActionTypes.SET_MODE:
            return{
                ...state, 
                mode: payload
            };
        case ActionTypes.SET_THEME:
            return{
                ...state,
                theme: payload
            }
        case ActionTypes.SET_THEME_HOVER: 
            return{
                ...state,
                themeHover: payload
            }
        default:
            return state;
    }
}
