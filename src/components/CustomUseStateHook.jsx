import React from 'react'

const CustomUseStateHook = (initialValue=0) => {
    let myCount = initialValue
    const setMyCount =(value)=>{
        myCount = myCount+value
    }

  return [myCount,setMyCount]
}

export default CustomUseStateHook