import { Component } from "react";
import styles from "../textcolor-styles/css-styles/text.module.css"

//named inheritent

class SararyHike extends Component{
//every one should have render method 
//this keyword used to  access the cuerrent  object choosen parent to child type  
//constructor this  is the pre-defined method ,with initlise the state ---data inist..
//to inis to this key-word used to state created to state inised'
//must call superconstructor in dervid class before accessing "this" or returning
// from dervied constructor =======error passed --so constracter this keyword need to parent to super keyword must to used to constractor innerside**''  
//name user' seen the state read to the h3-tag js so{used }
//to access this key word constructor we should use the supe(keyword) in the dirived class
 constructor(){
    super()
    this.state={
        name:"salary Hiked in the year  ",
        names: "surya kedar aravind",
        salary:10000
    }
 }
   
 toIncrementSalary=()=>{
    // alert("click a buton")
  this.setState(
    {
        salary:this.state.salary+1000
    },
        ()=>{
           
        }
  )
     
 }
  
 toDecrementSalary=()=>{
  this.setState(
    {
        salary:this.state.salary-1000
    },
        ()=>{
           
        }
  )
     
 }


   render(){
    return(
<div >
    <h1 className={styles.imgc}>{this.state.name} {this.state.salary}</h1>
            <h3>1.surya</h3>
            <h3>2.kedar</h3>
            <h3>3.aravind</h3>
            <h3>4.ajay</h3>
    <button onClick={this.toIncrementSalary}>update salary hike by 1000</button><br/><br/>
    <button onClick={this.toDecrementSalary}>to decrement the salary</button>
</div>


    )

   }
 

}
export default SararyHike
//one state update:to the any cases  to update the class based compo
//we can update the state using "setstate method" in class based compo
// setstate method will acccept 2 args

//1:Object-----we will update the state 
//2:call back----------wie can "retrieve and read" the updated state 

//now write a user defined method after salary dowwn  handleincrement
//so this called  method binding also using this keyword  custom method 

//to changes the state ...are using the method "set state method ***" first object access and second callback nd arrow funtion
//object state updated {salary:}
//set state =>will cause component to re-render



