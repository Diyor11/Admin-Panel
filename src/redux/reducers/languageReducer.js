import {EN} from "../../component/Datas/Data";
import {RU} from "../../component/Datas/Data";
import {UZ} from "../../component/Datas/Data";
import { ActionTypes } from "../ActionTypes.js/ActionTypes";

const initialState = UZ;

export const languageReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_LANGUAGE:
            if(payload === 'UZ') return UZ;
            if(payload === 'EN') return EN;
            if(payload === 'RU') return RU;
            break;
        default:
            return state;
    }
}