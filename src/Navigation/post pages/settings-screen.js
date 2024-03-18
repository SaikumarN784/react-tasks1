import { useContext } from "react"
import Heders from "../../Comonents/Functinal-Components/Heders/heders"
import { UserDetails } from "../navigation"
import ParentMemo from "../../Comonents/Functinal-Components/memo/parent"



const Settingscreen=()=>{
 
  //comtd return to any varable to inside object stored   
  const Userinfo=useContext(UserDetails)
    return(
      <>
      <Heders/>
      <h1>My Settingscreen  hello  {Userinfo.username}</h1>
      <ParentMemo/>

    
      </>  
    )
}

export default Settingscreen
