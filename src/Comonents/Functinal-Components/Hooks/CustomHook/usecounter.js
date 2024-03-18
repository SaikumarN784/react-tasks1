import { useState } from "react"


//hooks is nothing but simple jsx function 
const useCounter=()=>{

   const [count,setcount]= useState(0)
   
  const handleCount=()=>{
    setcount(count+1)
   }

   return [count,handleCount]
}
export default useCounter
//count:return to current value represented 
//handle count: a function which is used to change in the count