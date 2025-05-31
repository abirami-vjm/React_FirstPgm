import  Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About"
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import State from "./hooks/State";
import Form from './hooks/Form'
import { useEffect } from "react";
import Effect from "./hooks/Effect";
import Ref from "./hooks/Ref";
import Reducer from "./hooks/Reducer";
import Context from "./hooks/Context";
import Todos from "./pages/Todos";

 
function App() {

  let name="abirami"
  let age=20
   useEffect(()=>{console.log("component mouinted")
    return(()=>{console.log("coponent unmounted")})
   })
   return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home name={name} age={age} mark='56'/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About age={age} name={name}/>}/>
        <Route path="/state" element={<State/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/ref' element={<Ref/>}/>
        <Route path='/reducer' element={<Reducer/>}/>
         <Route path='/context' element={<Context/>}/>
          <Route path='/todos' element={<Todos/>}/>
       </Routes>
      </>
  )
}

export default App;
