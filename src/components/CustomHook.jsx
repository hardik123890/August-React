import React from 'react'

const CustomHook = (initialvalue = 0) => {

    const [count, setCount] = useState(initialvalue)

    const increase=()=>setCount(count+1)
    const decrease=()=>setCount(count-1)
    const reset=()=>setCount(0)

  return {count,increase,decrease,reset}
}

export default CustomHook