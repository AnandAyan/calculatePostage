import {combineReducers} from 'redux';
import calculateReducers from './calculate_reducers';
const rootReducer = combineReducers({
    // state: () => ({})
    calculate: calculateReducers,
});


export default rootReducer;