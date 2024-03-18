import { useEffect, useState } from "react"



const UseeffectExamp=()=>{
const[counter,setcounter]=useState(0) 
const[counter1,setcounter1]=useState(10) 




useEffect(()=>{
     console.log("use effect");
},[counter,counter1])

const handleincrement=()=>{
    setcounter(counter+1)
}
const handleincrement2=()=>{
    setcounter1(counter1+1)
}
    return(
        <>
        
        <h1>counter {counter }</h1>
        <button onClick={handleincrement}>incriment</button>

        <h2>counter  {counter1}</h2>
        <button onClick={handleincrement2}>counter 2</button>
        </>
    )
}
export default UseeffectExamp

//3 cases 
//cinareio:1.remove the array----use effect re-renders for every state or prop changes--re exicute **not a used mostly
//2**.empty array---useeffect will act like a commpo did mount/cmpo didmount once 
//3**(dependency)array with state or props values ----useeffect will act like a component did update -re exicuted (evry time exicute avuthdi)
//4.if call back the returns the functions we can prevent memory leaks ----useeffect will act like a compoenent willunmount

//dependency array:based on dependenct array,useeffect will go for different life cycles 




