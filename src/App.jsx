import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Other from './components/Other'
import {userData} from './data'
import UseStateHook from './components/UseState'
import UseEffect from './components/UseEffect'
import CustomHook from './components/CustomHook'
function App() {
  

  let user = {
    name:"Hardik",
    age:"24",
    address:"Dehri"

  }

  const [show, setShow] = useState(false)

  function hideShowComponent(){
      setShow(!show)
      
  }
 
  return (
    <>
      <Navbar/>
      {/* {show && <Other data = {user} />} */}
      {/* <Other data = {user} /> */}
      {/* <Other name = {user.name}/> */}
      {/* <button onClick={hideShowComponent}>Hide Other</button> */}
      {/* <button onClick={hideShowComponent}>Hide Other</button> */}
      {/* <UseStateHook/> */}
      {/* <UseEffect/> */}
      <CounterCustom/>
        {/* <CustomHook/> */}
    </>
  )
}

export default App
