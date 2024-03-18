//one side effcet in ur components
//some ex:side effcets are fetching data,directly updating the dom,and timers
//useeffect accepts the 2 args nd 2nd arg is optional 1.function 2.dependency array
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const Useeffectexamp2=()=>{
    const[counter,setcounter]=useState
     
    const[data,setdata]=useState=([]) 
    useEffect(()=>{
        Fetchdata()
    // },[]) by suppose 
    })

const Fetchdata = async()=>{
    
  const response=  await axios.get("https://dummyjson.com/products")
setdata(response.data.products)
}    
    return(
        <>
        <h1>useeffect</h1>
        <button onClick={()=>setcounter(counter+1)}>count change</button>
        {
           data.length>0 
           ?
           data.map(item=><h4>{item}</h4>)
           :
           <circle/>  
            
        }
        </>
    )
}
export default Useeffectexamp2

//ex:first http req--component did mount page loading to products seens  