const { useState, useMemo } = require("react")

//
const UseMemoexample=()=>{
    const [counter1,setcounter1]=useState(1)
    const [counter2,setcounter2]=useState(1)

const handleoneIncre=()=>{
    setcounter1(counter1+1)
}
const handleoneIncre2=()=>{
setcounter2(counter2+1)
}

const evenchecker = useMemo(()=>{
    return counter1%2===0 ? "EVEN" :"ODD"
},[counter1])
//once array dependency array counter1(entire the value return)
    return(
        <>
        <h4>{counter1}counter1</h4>
       <h4>{counter2}counter2</h4>
       <button onClick={handleoneIncre}>click on the counter1</button>
       <button onClick={handleoneIncre2}>click on the counter2</button>
<h3>{evenchecker}</h3>
        </>
    )
}
export default UseMemoexample
