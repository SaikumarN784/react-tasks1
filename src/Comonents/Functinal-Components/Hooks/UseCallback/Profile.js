
//usecallback: return the one function memorized **using usecallback
//disagvantage :salary inc age nd incre prop at time two worked  so refrence equality created so that prevent doing in the function call to "usecallback"
//wrapping....(handle age,salry entire function memorizing {nd memo is entire this fun value returned }) usememo returned 
////****react-perfamence increse technics -1.**usecallback2.usememo3.react.memo 4.pragments 5.keyprop this unneccarys
//memo /HOC innosense:higher order compo :a compo passed argue to the onther compo which gv+ives the un-hands compo(fun re-usebility ex:react.memo)
import CustomButton from "./customButton"

const { useState, useCallback } = require("react")

const ProfileExample=()=>{

   const [age,setage]= useState(100)
   const [salary,setsalary]= useState(1000)

const Handleage=useCallback(()=>{
    setage(age+10)
},[age])

const Handlesalary=useCallback(()=>{
    setsalary(salary+1000)
},[salary])
    return(
        <>
        <h1>salary {salary}</h1>
        <h1>age {age}</h1>
        
    
  <CustomButton onClick={Handleage}>
    age increment
  </CustomButton>
  <CustomButton onClick={Handlesalary}>
    salary increment
  </CustomButton>
        </>
    )
}

export default ProfileExample

