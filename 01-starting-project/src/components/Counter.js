import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter.counter);
  const showCounter =useSelector(state=>state.counter.showCounter);
  
  const toggleCounterHandler = () => {
    console.log('i was ckickjed ');
    dispatch(counterActions.toggle());
  };
   function incrementBy2() {
    dispatch(counterActions.increase(2));
}


function increment() {
  dispatch(counterActions.increment());
}

function decrement() {
  dispatch(counterActions.decrement())
}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&  <div className={classes.value}>{counter}</div>}

        <div className={classes.actions}>
        <button className={classes.btn} onClick={incrementBy2}>Increment By 2</button>
      <button className={classes.btn} onClick={decrement}>Decrement</button>
      <button className={classes.btn} onClick={increment}>Increment</button>
      </div>
      <button className={classes.btn} onClick={toggleCounterHandler}>Toggle Counter</button>

    </main>
  );
};

export default Counter;