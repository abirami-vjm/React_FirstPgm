import React, { useEffect } from 'react'
import {useState} from 'react'
const State = () => {
    const [count,setCount] =useState(0)

    useEffect(()=>{
        console.log("state")
    },[count])
    const sampleIncrementcount =() =>{

        setCount(count+1);
    }
     const sampleDecrementcount =() =>{
        setCount(count-1);
    }
  return (
    <div>
        <h1>UseState example</h1>
    <h1> Count:{count}</h1>
    <button onClick={sampleIncrementcount}>Click me here its Increment </button>
     <button onClick={sampleDecrementcount}>Click me here its Decrement </button>
    <button onClick={()=>setCount(0)}>Reset </button>
    </div>
  )
}

export default State