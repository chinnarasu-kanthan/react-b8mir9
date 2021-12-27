
import { createStore } from 'redux';
import {combineReducers} from 'redux';
import chartReducer from './ChartReducer';
// other reducers needs to add here

const rootReducers = combineReducers({    
    chartData : chartReducer      
});

const store = createStore(rootReducers)
export default store;