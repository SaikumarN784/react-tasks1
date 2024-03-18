
import { Route, Routes } from "react-router"
import Aboutscreen from "../post pages/About-screen"
import Invalidscreen from "../post pages/Invalid-screen"
import profilescreen from "../post pages/Profile-screen"
import Homescreen from "../post pages/home-screen"
import Settingscreen from "../post pages/settings-screen"
import ProductDetail from "../post pages/productscreen"






const Postroute=()=>{
    return(
        <Routes>
    
        <Route path="/" Component={Homescreen}/>
        <Route path="/setting" Component={Settingscreen}/>
        <Route path="/about" Component={Aboutscreen}/>
        <Route path="/profile" Component={profilescreen}/>
        <Route path="*" Component={Invalidscreen }/>

        <Route path="/:category/:id" Component={ProductDetail} />
        </Routes>
    )
}
export default Postroute



