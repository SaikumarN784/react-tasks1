import { Component } from "react";

class SomeProduct extends Component{
  constructor(){
    super()
    this.state={
        products:[
            {laptop:"asus",price:70000},{laptop:"hp",price:65000 }
        ]
    }
  }






  
//sort function
//so dispaly to change set change method used 
//to upadte to result 
  SortFunction=()=>{
   let result= this.state.products.sort((a,b)=>a["price"]-b["price"])
   console.log(result)
   this.setState({
    products:result
   })
  }

    render(){
        return(
            <div>
                <button onClick={this.SortFunction}>Sort by price</button>
         {
            this.state.products.map(ecahobject=>{
                return(
                    <div>
                        <h3>{ecahobject.laptop}</h3>
                        <h2>{ecahobject.price}</h2>
                    </div>
                )
            })
         }
            </div>
        )
    }
}
export default SomeProduct












