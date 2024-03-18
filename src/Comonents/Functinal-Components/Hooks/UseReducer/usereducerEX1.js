
//code flow high complexcity used to does't not use use state to use use reducer ;   
// usereducer:track the state changes from the complex logics (usestate use =general logics )  
import React, { useReducer } from 'react'
//reducer function will 2 parameters 1.action 2.state is a pure function ,only we can maniflicate state nd action type based to change   
function reducer(state,action){

// console.log(action,state)
switch(action.type){
    case "INCREMENT_AGE_BY_10":
        //to state change 
        return{...state, age: state.age + 10}
        case "DECREMENT_AGE_BY_10":
            return {...state,age:state.age-10}

case "CHANGE_THE_NAME":
    return {...state,name:"hello sai"}
//    case "ADD_FRIUT":
//    return {...state,fruits:[...state,fruits,"NEW_FRUIT"]}

      default :
      return state;
}
}
//
const initialstate={
    age:100,
    name:"sai",
    fruits:["apple","banana"]
}
//current state  nothing bt is object current state is represnted to inital state;
//dispatch function will accept an object nd key value pairs ;
const UseReducer=()=>{
   const [currentstate,dispatch]=useReducer(reducer,initialstate)
   const incrementAge=()=>{
dispatch({
    //request arrised the code flow one  action dispatch  will goes to the reducer function and reducer (state collect and action also collect );
//dispatch is one obj represented 
    type:"INCREMENT_AGE_BY_10"
})
   }
   //function bined the name change 
   const ChangeName=()=>{
    dispatch({
     type:"CHANGE_THE_NAME"
    })
   }
   //dispatch :action is nthg bt  one obj
   const decrementage=()=>{dispatch({type:"DECREMENT_AGE_BY_10"})}
  return ( 
    <>
    <h1>useReducer</h1>
    <h2>{currentstate.age}</h2>
    <h4>{currentstate.name}</h4>
    <button onClick={incrementAge}>increment age by 10</button>
    <button onClick={decrementage}>decrement age by 10</button>
    <button onClick={ChangeName}>change the name</button>

    </>
  )
}

export default UseReducer
//dispatch:to change current state the display the function