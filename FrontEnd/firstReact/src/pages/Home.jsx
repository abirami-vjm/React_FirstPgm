import React from 'react'
import { Link } from 'react-router-dom'

export const Home = ({name,age,mark}) => {
  return (
    <div>
    <h1>welcome {name}</h1>
    <h1>welcome {age}</h1>
     <h1>welcome {mark}</h1>
     <Link to='/state'>Use state example</Link><br></br>
     <Link to='/form'>Click here Form is open</Link><br></br>
      <Link to='/effect'>Click here Effect is open</Link><br></br>
       <Link to='/ref'>Click here Ref is open</Link><br></br>
         <Link to='/reducer'>Click here Reducer is open</Link><br></br>
           <Link to='/context'>Click here Context is open</Link><br></br>
           <Link to='/todos'>Click here ToDos page is open</Link>
    </div>
  )
}
export default Home 
