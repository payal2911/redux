// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from "./counter";
import authReducer from "./auth";





// const counterReducer = (state = initialState, action) => {
//
//     if (action.type === 'increment') {
//         return {
//              counter: state.counter + 1 ,
//              showCounter: state.showCounter
//             };
//     }
//     else if (action.type === 'decrement') {
//         return { counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     else if (action.type === 'increased by 7') {
//         return { counter: state.counter + action.payload,
//             showCounter: state.showCounter
//          };
//     }
//
//     else if (action.type === 'toggle') {
//         return {
//             showCounter:!state.showCounter,
//              counter: state.counter
//             };
//     }
//     else {
//         return state;
//     }
// }

const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
});



export default store;
