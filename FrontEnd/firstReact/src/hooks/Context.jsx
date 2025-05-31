import React, { createContext } from 'react'


const Context =createContext()

export const ContextProvider =({children})=>{

    let user="Anbu"
    let age=18
    let email="abiananthmca@gmai.com"
    let value={user,age,email}
     return (

        <Context.Provider value={value}>
        {children}
        </Context.Provider>
     )
}


/*const Context = () => {
  return (
    <div>Context</div>
  )
}*/

export default Context