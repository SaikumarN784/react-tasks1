import { useContext } from "react"
import ComponentA from "../../Comonents/Functinal-Components/Context/componentA1"
import Heders from "../../Comonents/Functinal-Components/Heders/heders"
import { UserDetails } from "../navigation"
import useCounter from "../../Comonents/Functinal-Components/Hooks/CustomHook/usecounter"
import Useeffectexamp2 from "../../Comonents/Functinal-Components/Hooks/Useeffecthooks/UseeffcetEX2"
import UseMemoexample from "../../Comonents/Functinal-Components/Hooks/useMemo/UseMemo"
import UseeffectEX3 from "../../Comonents/Functinal-Components/Hooks/Useeffecthooks/useeffectEX3"
import useAxios from "../../Comonents/Functinal-Components/Hooks/CustomHook/UseAxios"
import { BASE_PROD_URL, endpoints } from "../../Endpoints/endpoints"

const Aboutscreen=()=>{
  //hook used usecontext
  let Globalinfo =useContext(UserDetails)

  const [data]= useAxios(`${BASE_PROD_URL}${endpoints.categories}`)
// console.log(dataa)

  //custom hook {destructring function also }
   const [count,setcount]=useCounter()
  // console.log(Globalinfo)

  const ChangeName=()=>{
        Globalinfo.ChangeName()
  }
    return(
      
      <>
      <Heders/> 
      
      <h1>About Screen </h1>
      <h3>i am from navigation.js,global info {Globalinfo.username}</h3>
      <button onClick={ChangeName}>change Name</button>
      {/* <h4>{count}</h4>
      <button onClick={setcount}>increment</button> */}
      <UseeffectEX3/>
       
      {/* <ComponentA/> */}
      {
        data.length>0
        ?
        data.map(ele=><h2>{ele}</h2>)
         :
          <h2>no data found</h2>
      }
      </>  

    )
}

export default Aboutscreen

