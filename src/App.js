import { useDispatch , useSelector } from 'react-redux';
import {login} from './Config/store/action'

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  console.log(counter);
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={()=>dispatch(login())} className="btn btn-dark">Dark</button>
      </header>
    </div>
  );
}

export default App;
