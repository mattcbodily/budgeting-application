import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import budgetReducer from './reducers/budgetReducer';

const rootReducer = combineReducers({
    userReducer,
    budgetReducer
});

export default createStore(rootReducer);