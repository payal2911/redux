import { createStore } from 'redux';

 const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {

    if (action.type === 'increment') {
        return {
             counter: state.counter + 1 ,
             showCounter: state.showCounter
            };
    }
    else if (action.type === 'decrement') {
        return { counter: state.counter - 1,
            showCounter: state.showCounter 
        };
    }
    else if (action.type === 'increased by 7') {
        return { counter: state.counter + action.payload,
            showCounter: state.showCounter
         };
    }
    // //division 
    // else if (action.type === 'divide by 7') {
    //     return { counter: state.counter / action.payload }
    // }
    // //multiplication 
    // else if (action.type === 'divide by 7') {
    //     return { counter: state.counter * action.payload }
    // }
    else if (action.type === 'toggle') {
        return {
            showCounter:!state.showCounter,
             counter: state.counter 
            };
    }
    else {
        return state;
    }
}

const store = createStore(counterReducer);

export default store;
