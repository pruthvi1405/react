// import React, { useReducer } from 'react'

// const Counter = ({initalValue}) => {
//     const reducer=(state,action)=>{
//         switch(action.type){
//             case "increment":
//                 return {
//                     ...state,
//                     count:state.count+1
//                 };
//             case "decrement":
//                 return {
//                     ...state,
//                     count:state.count-1
//                 };

//             case "value_to_add":
//                 return {
//                     ...state,
//                     valueToAdd:action.payload
//                 }
//             case "on_submit":
//                 return {
//                     ...state,
//                     count:state.count+state.valueToAdd,
//                     valueToAdd:0
//                 }

//             default:
//                 throw new Error("Unexpected action type")
//         }
        

//     }
//     const increment=()=>{
//         dispatch({
//             type:"increment"
//         })
//     }

//     const decrement=()=>{
//         dispatch({
//             type:"decrement"
//         })
//     }

//     const [state,dispatch]=useReducer(reducer,{
//         count:initalValue,
//         valueToAdd:0
//     })


//     const onSubmit=(e)=>{
//         e.preventDefault()
//         dispatch({
//             type:"on_submit"
//         })
//     }

//     const onChange=(e)=>{
//         const value=parseInt(e.target.value)

//         dispatch({
//             type:"value_to_add",
//             payload:value
//         })
//     }


//   return (
//     <div>
//         <p>{state.count}</p>
//         <button onClick={increment}>Increment</button>
//         <br/>
//         <button onClick={decrement}>Decrement</button>
//         <form onSubmit={onSubmit}>
//             <input value={state.valueToAdd || ''} onChange={onChange} placeholder='enter value here'/>
//             <button type='submit'>Add Value</button>
//         </form>
//     </div>
//   )
// }

// export default Counter