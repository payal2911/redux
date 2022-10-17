// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  return (
    <div className="App" style={{background:"turquoise", margin:20, padding:20}}>
      <h1>Number</h1>
    { show && <div> {counter} </div>}
      <button onClick={() => { dispatch({ type: "increment" }); }} style={{ margin: 20, color: "black", background: "white", borderColor: "white", padding:"5"  }}>Increment</button>
      <button onClick={() => { dispatch({ type: "decrement" }); }} style={{ margin: 20, color: "black", background: "white", borderColor: "white", padding:"5"   }}>Decrement</button>
       <button onClick={() => { dispatch({ type: "increased by 7", payload: 7 }); }} style={{margin: 20, color: "black", background: "white", borderColor: "white" , padding:"5"  }}>Add by 7</button> 
      {/* <button onClick={() => { dispatch({ type: "divide by 7", payload: 7 }); }} style={{ color: "white", background: "red", padding: 20, borderColor: "red" }}> divide by 7</button>  */}
      <div>
      <button onClick={() => { dispatch({ type: "toggle"}); }} style={{ margin: 20, color: "black", background: "white", borderColor: "white", padding:"5"  }}>Toggle Counter</button> 
      </div>
    </div>
  );
}

export default App;
