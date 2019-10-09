import { combineReducers } from 'redux';

import { reducer as authReducer } from "../pages/student"

// Combine all the reducers
const rootReducer = combineReducers({ 
    authReducer
});

export default rootReducer;