import Heders from "../../Comonents/Functinal-Components/Heders/heders"
import ProfileExample from "../../Comonents/Functinal-Components/Hooks/UseCallback/Profile"
import UseReducer from "../../Comonents/Functinal-Components/Hooks/UseReducer/usereducerEX1"
import UseMemoexample from "../../Comonents/Functinal-Components/Hooks/useMemo/UseMemo"



const profilescreen=()=>{
    return(
      <>
      <Heders/>
      <h1>My profile Screen</h1>
      {/* <UseReducer/> */}
      {/* <UseMemoexample/>  */}
    <ProfileExample/>
      </>  
    )
}

export default profilescreen
