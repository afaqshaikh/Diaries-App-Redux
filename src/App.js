import logo from './logo.svg';
import './App.css';
import { useDispatch , useSelector } from 'react-redux';
import {login} from './Config/store/action'

function App() {
  const dispatch = useDispatch();
  const name = useSelector((state)=>state.name)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-white">
          {name}
        </p>
        <button type="button" onClick={()=>dispatch(login())} className="btn btn-dark">Dark</button>
      </header>
    </div>
  );
}

export default App;
