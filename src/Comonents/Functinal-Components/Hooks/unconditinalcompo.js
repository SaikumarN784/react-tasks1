//////-----uncontrol componets use to useref HOOK----/////////////
//ref is a attribute which briches this input on the dom 
//to validate to cureent inside value ni
//dom direct ga refrence cheyali u can use the useref
//2.values purches cheyali
//userfocus :to show cureent property focus method() and value uptain usernameref.curent.value   
import { useRef } from "react"

const Uncontrolled =()=>{
    const usernameRef=useRef(null)
    const passwordRef=useRef(null)

    // const handleFocus=()=>{
    // }
    const handleSubmit=(event)=>{
event.preventDefault()
   const username=usernameRef.current.value
   const password=passwordRef.current.value
if(username  .length>5){
    alert("give enter less tham 5 char")
}

// console.log("focus me",usernameRef.current.focus(),usernameRef.current.value)
// console.log("username",usernameRef.current.value);
// console.log("password",passwordRef.current.value);
    }
    return(
        <>
        <h1>Uncontrolled component example</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="username" ref={usernameRef}/>
            <input type="password" name="password" ref={passwordRef}/>

            <input type="submit" />
            {/* <button onClick={HandleFocus}>focus on inputs</button> */}
        </form>
        </>
    )
}
 export default Uncontrolled