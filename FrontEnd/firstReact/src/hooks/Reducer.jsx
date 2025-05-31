import React , {useReducer}from 'react'

const reducerFunction=(state,action)=>{
    switch(action.type)
    { case "Increment":
        return {count:state.count+1}
      case "decrement":
        return {count:state.count-1}
      case "Reset":
        return {count:0}
      default:
            return {count}

    }
}

const Reducer = () => {
    const initialValue ={count:0}
    const[state,dispatch]=useReducer(reducerFunction,initialValue)

  return (
    <div>
        <h1>Reducer</h1>
        <h1>Count:{state.count}</h1>
        <button onClick={()=>dispatch({type:"Increment"})}> + </button>
        <button onClick={()=>dispatch({type:"decrement"})}> - </button>
        <button onClick={()=>dispatch({type:"Reset"})}> Reset </button>
    </div>
  )
}

export default Reducer