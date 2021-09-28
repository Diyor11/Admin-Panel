import { combineReducers } from 'redux';
import { languageReducer } from './languageReducer';
import { productReducer } from './productReducer';
import { ThemeReducer } from './ThemeReducer';

const reducer = combineReducers({
    theme: ThemeReducer,
    products: productReducer,
    data: languageReducer
});

export default reducer;