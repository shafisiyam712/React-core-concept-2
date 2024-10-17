import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
    const handleCount=()=>{
        const newCount=count+1
        setCount(newCount)
    }
    const handleReduce=()=>{
        const newCount=count-1
        setCount(newCount)
    }
    return (
        <div style={{border: '2px solid yellow'}}>
            <h3>Count: {count}</h3>
            <button onClick={handleCount}>ADD</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}