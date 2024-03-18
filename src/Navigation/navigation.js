//to create the third party code internal type thechukuntam
import { BrowserRouter } from "react-router-dom"
import Postroute from "./PostRoutes/post-route"
import Preroute from "./Pre pages/pre-routes"
import { createContext, useState } from "react"

//constext creatings outside :
//export craete the used to sonsume chesukovadaniki about -screen
export const UserDetails=createContext()
const NavigationStack =()=>{
   //drilling used : and username changed    TO USE udater function (setusername)
  const [username,setusername]= useState("surya")
  //this is form controlled state carete
   const [login,setlogin] = useState(false)
   
  const  ChangeName=()=>{
   setusername("hello sai")
  }
   return(

    <BrowserRouter>
    <UserDetails.Provider value={{
      username,
      ChangeName

    }}>
   {
      // true 
      login
      ?
      <Postroute/>
      :
      <Preroute/>
   }

</UserDetails.Provider> 

    </BrowserRouter>
   )
}
export default NavigationStack
// this stack all the contains the Routing 
///**(/ thois represented the home screen) */ 
// react-Router-dom

//**    POST ROUTE */
//home
//settings
//about
//profile

///**PRE ROTE--Static route */
//1.login
//2.register
//3.otp
//4.forget password

//protected routes: routers protect to conditinal renders (ternary) to used 
