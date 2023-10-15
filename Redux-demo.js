const redux = require('redux');

const CounterReducer = (state = { counter: 5 }, action) => {
    if (action.type === 'decrementBy2') {

        return { counter: state.counter - 2 }

    }
    if (action.type === 'incrementBy2') {

        return { counter: state.counter + 2 }
    }
    return state;
}

const store = redux.createStore(CounterReducer);

console.log(store.getState())

const countSubs = () => {
    const lastSTate = store.getState();

}
store.subscribe(countSubs);
// store.dispatch({ type: 'decrementBy2' });
// store.dispatch({ type: 'decrementBy2' });
// store.dispatch({ type: 'decrementBy2' })
// store.dispatch({ type: 'decrementBy2' })
// store.dispatch({ type: 'decrement' })
store.dispatch({type:''});