////////-----control componets use to useref HOOK----/////////////
//steps to write controlled components
//1.take a input form with inputs elements 
//2.create a local state using (usestate hook)
//3.attach the local state bind the input using value attribute 
//4.give Onchange handler (as a attribute),collect the user input via event using event.target.value 

//***useref def: dom accses to userefused focus to dom control and purches the values 
//usestate to retuned the value and updater function
//value pick click the target use 
//**state is binded so  empty and value as a empty so, setupadted user udate chesetime to chnage the state(user every time click to change the state (setstate) ) 
//**evry keypress ki component re-rendering to show the updated content next validations
//---validations:
import { useState } from "react"

//5.collect and validate the user details
const Controlled=()=>{
    const [username,setUsername]= useState("")
    const [password,setPasword]= useState("")
      const[usernameError,setUsernameError]=useState("")

const Usernamehandler=(event)=>{
// console.log(event.target.value);
let usernameinput=event.target.value
setUsername(usernameinput)

//tempoery holdd conditions 
  //  if(usernameinput.length>5){
  //   alert("please enter less than 5 char  ")
  //   ShowError()
  //  }else{
  //   setUsernameError(null )
  //  }

  //---------use to form validations preroute------------generally crete
            


//-----------------------------------
// let Passwordiput=event.target.value
// setPasword(Passwordiput)

}
  const ShowError=()=>{
    setUsernameError("username must be less than 5 character")
  }

//declare the function 
const handleSubmit=(event)=>{
  event.preevntdefult()
  //collect user,pass initial to pre-event to use event collect
  console.log(username)
}


    return(
        <>
        <h1>controlled components</h1>
      
        <form onSubmit={handleSubmit} >  
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      value={username}
      //onchange handler is a function accepted and funtion any situation create function return on the top
      onChange={Usernamehandler}
      style={{border:usernameError ?"2px solid red":"0px"}}
    />
    {
   usernameError
      && 
<span style={{color:"red "}}>{usernameError}</span>
    }
    
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      value={password}
    />
  </div>
  <div className="form-check mb-3">
    {/* <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label> */}
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

 

  
        </>
    )
}
export default Controlled

//page autosummbit preevent chesukovachu how (event.preventdefult)used to
//// form added action="/action_page.php"

//dammy apis
//auth users api

//post:craete post data body pass username ,password to collect the ui part
//ui user typed collect to submit the i have to post to the this object url
//