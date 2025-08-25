import { useState } from "react"


const UseStateHook = () => {
    // let count = 0;

    let [count, setCount] = useState()

    const increment = ()=>{
        //count++
        // console.log(count)
        // setCount(count+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>

    </div>
  )
}

export default UseStateHook