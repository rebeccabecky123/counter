import React, { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)

    const increase=setCount(count+1)
    const reduce=setCount(count-1)
    const reset=setCount(0)
    
    return (
        <div className="text-center  bg-violet-400">
          <h1 className="text-4xl font-bold">Count:{count}</h1>
          <button className="bg-blue-800 mx-3 px-2 mt-6 hover:bg-green-400 cursor pointer rounded-3xl " onClick={increase} >Increase</button>
          <button className="bg-yellow-700 mx-3 px-2 hover:bg-violet-700 cursor pointer rounded-3xl" onClick={reduce} >Reduce</button>
          <button className="bg-green-800 mx-3 px-2 hover:bg-orange-600 cursor-pointer rounded-3xl" onClick={reset} >Reset</button>
        </div>
    )
}