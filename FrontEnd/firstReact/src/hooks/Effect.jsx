import React from 'react'
import { useEffect , useState} from 'react'

const Effect = () => {
    const [users, setUsers]=useState([])
       useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) =>res.json())
        .then((data)=>setUsers(data))
       })
  return (
    <div><h1>Effect</h1>
    {users.map((user)=>(
        <>
        <p key={user.id}> {user.name}</p>
         <p key={user.id}> {user.address.geo.lat}</p>
          <p key={user.id}> {user.company.bs}</p>
           <p key={user.id}> {user.website}</p>
        </>
    ))}
    </div>
  )
}

export default Effect