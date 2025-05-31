import React, { useContext } from 'react'
import Context from '../hooks/Context'

/*const About = (props) => {
  return (
    <div>About

        <h1>welcome {props.age} {props.name}</h1>
    </div>
  )
}*/
const About =()=>{

  const {user,age,email}=useContext(Context)
  return(
    <div>
      <h1> I am a {user}</h1>
      <h1> I am a age {age}</h1>
      <h1> I am a email {email}</h1>
    </div>
  )
}

export default About