import React from 'react'
import CustomHook from './CustomHook'
const CounterCustom = () => {
    const {count,increase,decrease,reset} = CustomHook(10)

  return (
    <div>
        <h1>CounterCustom</h1>
        <h2>count: {count}</h2>
        <button onClick={increase}>icre</button>
        <button onClick={decrease}>Dcre</button>
        <button onClick={reset}>Reset</button>
        
     </div>
  )
}

export default CounterCustom