import React, { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
    const [jokes, setJokes] = useState({})

    async function fetchData(){
        let response = await fetch('https://official-joke-api.appspot.com/jokes/random/')
        const data = await response.json()
        //console.log(jokes)
        setJokes(data)
    }
    
    useEffect(()=>{
         fetchData()
        //console.log("This is priority data")

    },[])



  return (
    <div>
        {/* <span>X:{X}{" "}Y:{Y}</span>
        <button onClick={()=>setX((prev)=>prev+1)}>X+</button>{" "}
        <button onClick={()=>setY((prev)=>prev+1)}>X+</button> */}
        <p>{jokes.id}</p>
        <p>setup: {jokes.setup}</p>   
        {/* homework */}

    </div>
  )
}

export default UseEffect