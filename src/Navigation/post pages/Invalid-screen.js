import { useNavigate } from "react-router"


const Invalidscreen=()=>{
     const Navigate=useNavigate()
  const handlerouter=()=>{
     Navigate("/")
  }
    return(
      <>
    
      <h1>404 error Screen</h1>
      <button onClick={handlerouter}>go to home back</button>
    
      </>  
    )
}

export default Invalidscreen

//Usenavigate:use navigate isa hook.which is used to navigate are switch b/w pages through js functionality

//link not used  use navigate hook 
//ststic routing;