import React from 'react'
import { useReducer } from 'react'

const useCounter = ({initialValue}) => {
  //const [count, setCount] = useState(0);

  const reducer = (state, action) => {
    if(action.a === "increase") {
      return {
        ...state, count:state.count+1
      }
    }
    if(action.a === "decrease") {
      return {
        ...state, count:state.count-1
      }
    }
    if(action.a === "change") {
      return {
        ...state, valueToAdd: action.payload
      }
    }
    if(action.a === "submit") {
      return {
        ...state, count: state.count + state.valueToAdd
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    count: initialValue,
    valueToAdd: 0
  });

  const handleClickIncrease = () => {
    //setCount(count + 1);
    dispatch({a:"increase"});
  }

  const handleClickDecrease = () => {
    //setCount(count - 1);
    dispatch({a:"decrease"});
  }

  const handleChange = (e) => {
    dispatch({a:"change", payload : parseInt(e.target.value) });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({a:"submit"});

  }

  return (
    <div>
      <button onClick={handleClickDecrease}>decrement</button>
      <button onClick={handleClickIncrease}>increment</button>
      
      <p>{state.count}</p>
      <form onSubmit={handleSubmit}>
        <input value ={state.valueToAdd} onChange={handleChange} type="number"></input>
      </form>
    </div>
  )
}

export default useCounter