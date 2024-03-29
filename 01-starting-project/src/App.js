import Counter from './components/Counter';
import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import UserProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector(state=>state.auth.authenticated);
  console.log("in App")
  return (
    <Fragment>
      <Header/>
     {!isAuth &&  <Auth/>}
     {isAuth && <UserProfile/>}
      {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;
