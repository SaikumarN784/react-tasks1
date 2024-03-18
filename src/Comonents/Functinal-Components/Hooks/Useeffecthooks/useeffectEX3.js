//memory leak:data leak (onther screen be run the useeffect mouse move on runned wn ever use about only )
//useeffect can return a fun to prevent the memory leaks 
import { useEffect, useState } from "react"

const UseeffectEX3=()=>{
    const [x,setx]=useState(null)
    const [y,sety]=useState(null)


    useEffect(()=>{
        window.addEventListener("mousemove",UseCallbackFun)
        return ()=>{
            //clean the component by preventing memory leaks 
        //the useeffcet behaving has a  clean as a excute ..nd compo dom insert updated and onther screen moveing innsence "about screen unmounted dom removed also nd data leaks also not forformed  "
        window.removeEventListener("mousemove",UseCallbackFun)
    }

    },[])
    const UseCallbackFun=(event)=>{
        console.log(event.haiix)
        console.log(event.haiiy )

        setx(event.haiix)
        sety(event.haiiy)
        //to ui seens 
      

    }
    return(
        <>
        <h1>hellloooo</h1>
        <h1>X position{x}</h1>
        <h2>Y position {y}</h2>
        </>
    )
}
export default UseeffectEX3

//useeffect: replicaa
//1.compoennt didmount-mounting phase array [ ]
//2.compo did upadate--updated phase   [varable]
//3. compo will mount ---unmount remove phase 
