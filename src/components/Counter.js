
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter);
    return (
        <div className="App" style={{background:"beige", margin:20, padding:20, marginLeft: "25%", marginRight: "25%", borderRadius: 20, textAlign:"center"}}>
            <h1>Number</h1>
            { show && <h1> {counter} </h1>}
            <div style={{alignItems:"center"}}>
            <button onClick={() => { dispatch(counterActions.increment()); }} style={{ margin: 20, color: "white", background: "#370075", borderWidth:0, padding:12, borderRadius: 10,}}>Increment</button>
            <button onClick={() => { dispatch(counterActions.decrement()); }} style={{ margin: 20, color: "white", background: "#370075", borderWidth:0, padding:12, borderRadius: 10, }}>Decrement</button>
            {/*{ type: SOME_UNIQUE_IDENTIFIER, payload: 10}*/}
            <button onClick={() => { dispatch(counterActions.increase(7)); }} style={{ margin: 20, color: "white", background: "#370075", borderWidth:0, padding:12, borderRadius: 10 }}>Add by 7 </button>
            {/* <button onClick={() => { dispatch({ type: "divide by 7", payload: 7 }); }} style={{ color: "white", background: "red", padding: 20, borderColor: "red" }}> divide by 7</button>  */}
            </div>
            <div>
                <button onClick={() => { dispatch(counterActions.toggle()); }} style={{ color: "white", background: "#370075", borderWidth:0, padding:12, borderRadius: 10,}}>Toggle Counter</button>
            </div>
        </div>
    );
}

export default Counter;
