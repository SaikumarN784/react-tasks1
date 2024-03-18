// //class keyword followed by the name compo
// //extends use:parent to proporties and methods nd render "innherhit"(extends keywordcomponents to extends )
// // the render() method inside which is used to returned "JSX" this is mandatory method 
// //state:state is an object to use to one component information  stored to state concept used  is a private is a mutable.. read or right also  //props :props is an im-mutable only reading purpose 
// //consstrtor():to create state and  inisilize state 
// //state is changed to only set state method used 
// // component re-render : re excuite the components {one state changed incase component we will get re-render show upadate onother one   }
// //state and props diffrence react::::::
//         // state: state is at the same time both read and right it's can be read and right the data 
//            // components storeed on the so called state 
//            // to changes the seen in user wecan dirctly used the state compo   

// import { render } from "@testing-library/react";
// import { Component } from "react";





//         //props:props are read only is an immutable only reading purposeed used  
//         //props is used to data state from the  parent to children data changed {props allow you to pass data from is one comp to onther comp as an argument }
//         // props are communicate b/w components 

//      //Features in React////
//     // Dom: HTML content all object model browser are placed we can call at as the  dom 
//     //when ur react come to "Virtual dom" concept introduced: updates are fast ex:click filter data changes VD very fast

//      //component based Archhitecture : code reusablility nd separation of concerns 
     
//     // UndirectinalDataflow:: data tranfer from parent to child  props easy  to understanding  nd debug applications

//     //babel: it is transpiler which transpiles the jsx code (new syntax) to js code 
//    // browser can understand 

//   //advantages : Large and active community ,Ecosystem Tooling , jsx ,backed by face book, smooth migration and integration ,smooth intigrition ,Mobile app development 
// // React has main feature ( Virtual DOM) (component base approch)

// //DISADVANTAGES OF REAL DOM ///

// // one parent is changed entire children all re-render or re-exicution real dom in ex;
// //Virtual DOM: React maintains a lightweight ,in-memory representation of the Dom called the virtual dom a VD maintains "REACT"
// //whn ever changes are made to the application state or components ,react constructs a new virtual dom tree 

// //VD is a two algarisoms 
// //1. Diffing 2.Reconciliation 

// ////ecah products increment are decrement use "setstate"
 
// class Newproducts extends   Component{

//    constructor(){
// super()
//     this.state={
//        products:

//    [
//       {
//          "id":1,
//          "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//          "price":109.95,
//          "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//          "category":"men's clothing",
//          "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//          "rating":{
//             "rate":3.9,
//             "count":120
//          }
//       },
//       {
//          "id":2,
//          "title":"Mens Casual Premium Slim Fit T-Shirts ",
//          "price":22.3,
//          "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//          "category":"men's clothing",
//          "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//          "rating":{
//             "rate":4.1,
//             "count":259
//          }
//       },
//       {
//          "id":3,
//          "title":"Mens Cotton Jacket",
//          "price":55.99,
//          "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//          "category":"men's clothing",
//          "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//          "rating":{
//             "rate":4.7,
//             "count":500
//          }
//       },
   
//    ]
 

// }
  

//    }
   

   
// }

// sortinglist=()=>{
//    let result=this.state.products.sort((a,b)=>a["price"]-b["price"])
//    console.log(result);
//    this.setstate({
//       products:result
//    })
// }
//    render(){
//       return(
//          <div>

// <button onClick={this.S}>sort by value </button>

// {

// }


//          </div>
//       )
//    }

   
// export default Newproducts 
 
// //onther component create to use onther place to be utilised 
// class Productlist extends Component{
//    render(){
//       return(
//          //each product return
//   <div>
//    <h3>{this.props.data.title}</h3>
//    <h3>{this.props.data.price}</h3>
//   </div>
//       )
//    }
// }



 
// //NOTION 
// //map is use to iterate the array
// //in raect map is used to  iterate the UI
// //Map is used to list  Rendering 
// //when using map in "list rendering me must use key prop":{additinal information component are props enni aina pass cheyochu user-defined prop is object  } ("elememnts=attrbute") for the parent is used ** div is ex parent so key used (div)
// // advantage : if identify react that list eachitem Uniqe id generate  

// //comunication b/w child to parent **//



// //shallocopy----deepcopy

// //shallow:
// //as a same reference show b/w in thetwo diffrent varbles same refrence stored so shallow copy 
// //dis-advantage:children change to effect is parent will also changed  


// //deep:
// //memory referance will be state b/w two diff memory allocations 
// //1.parant varable: parent effect to children also effect 
// //2.children varable:children changed to children effect
// //deep copy "spread operator" to used is a ways of  5*

// //increment(method binding)
 



// //Fragaments or REact Fragments:
// //JSX rules are(first rule:every component must have a single parent ...parent must be container aiundali  )
// //div,articles, nav,sections or empty container

// //in react empty container which is representes with <></>empty opening and empty closing tags 
// // its one of the  optimization technique(simpilipy:one code is same functinality bt in the most effecency manner )

// //onther way : react.fragment it will act as shared parent to abey the jsx first rule     


//  //sortby function
//             //every compo return as a jsx write to parent element mandatory 