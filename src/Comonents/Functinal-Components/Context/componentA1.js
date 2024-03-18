//propdrilling
import React, { useState } from "react"
import ComponentA2 from "./ComponentA2"

function ComponentA(){
  const [name,setname]=useState("gud morning ")
    return(
        <div>
         <ComponentA2 name={name}   />
        </div>
    )
}

export default ComponentA


//contaexts creates 
//** context api:context is used to communicate the data globally with out the prop drilling
//steps:
//1.identify the data to be forwarded ,for wrapping 
//2. create a context using create context method for global data share
//3. wrap the context for which data to be forworded, using provider with value attribute 
//4. select the targeted component for data consumption
//5 . consume the data using useContext (hook used to **)
