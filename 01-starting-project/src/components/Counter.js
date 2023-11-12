import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter);
  const toggleCounterHandler = () => {
    console.log('i was ckickjed ');
  };
  function incrementBy5() {
      dispatch({type:'increment'});
  }
  function decrementBy5() {
    console.log('i am decre');
    dispatch({type:'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

        <div className={classes.actions}>
        <button className={classes.btn} onClick={incrementBy5}>Increment By 5</button>
      <button className={classes.btn} onClick={decrementBy5}>Decrement By 5</button>
      </div>
      <button className={classes.btn} onClick={toggleCounterHandler}>Toggle Counter</button>

    </main>
  );
};

export default Counter;