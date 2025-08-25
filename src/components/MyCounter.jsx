import React from 'react'
import CustomUseStateHook from './CustomUseStateHook'

const MyCounter = () => {
    const[myCount,setMyCount]= CustomUseStateHook(1)
  return (
    <div>
        <h1>Hello my counter</h1>
        <h2>count: {myCount}</h2>
        <button onClick={setMyCount(myCount+1)}>inc</button>
    </div>
  )
}

export default MyCounter