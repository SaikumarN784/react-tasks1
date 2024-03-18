import {  Route, Routes } from "react-router"
import LoginScreen from "../post pages/login-screen"
import Invalidscreen from "../post pages/Invalid-screen"

const Preroute=()=>{
    return(
        <Routes>
    
    <Route path="/" Component={LoginScreen}/>
    <Route path="*" Component={Invalidscreen}/>

        </Routes>
    )
}
export default Preroute