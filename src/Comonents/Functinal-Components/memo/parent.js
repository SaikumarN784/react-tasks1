
//counter again counter is a re-renders given so 
import React, { useState } from 'react'
import ChildMemo from './child'

function  ParentMemo() {
    const [counter,setcounter]=useState(0)
  return (
    <div>

        <h3>{counter}</h3>
        <button onClick={()=>setcounter(counter+1)}>count increment</button>
          <ChildMemo/>
    </div>
  )
}

export default ParentMemo

//usememo:   values immurised 

//memo : it prevent the re-rendering its state or prop chnages compo doesn't get  re-render  
//memo is a "HOC" functinal re-usebility



