import { Component } from "react";
import axios  from "axios";
import bbbg from "../../../Functinal-Components/textcolor-styles/css-styles/text.module.css"
import bbbg2 from "../../../Functinal-Components/textcolor-styles/css-styles/text.module.css"
class Mounting extends Component{
//to seens in the ui state and setsate create

     constructor(){
        console.log("constructor");
        super()
        this.state={
            products:[]
        }
     }

componentDidMount(){
    console.log("componentdidmount");
     axios.get("https://fakestoreapi.com/products")
.then(response=>{
    if(response.status===200){
        this.setState({
            products:response.data
        })
    }
    else{
        alert("somthing went wrong")
    }
   
})
.catch(error=>console.log(error))
//response should be in the produts
} 

    render(){
        //render method will be call when ever state updates
        console.log(this.state.products,"render method");
        return(
            <> 
              <h2  >products Lists</h2>
<table className={bbbg2.mucolor2}>   
        <tr className={bbbg.mucolor}>
            <th>id</th>
            <th>Title</th>
            <th>price</th>
            <th>image</th>
            <th>count</th>
        </tr>
          
           {
            this.state.products.length>0 ?
            
            // this.state.products.map(eachobject=><h2 key={eachobject.id}>{eachobject.title} </h2>
            
                this.state.products.map((eachobject)=>{
                    return(
                  
                
               <tr key={eachobject.id }> 
                <td className={bbbg.mucolor}>{eachobject.id}</td>
                <td>{eachobject.title}</td>
                <td>{eachobject.price}</td>
                <td><img src={eachobject.image} alt="" width={100} height={100}></img ></td>
                <td className={bbbg.mucolor}>{eachobject.rating.count}</td> 
               </tr>

                    )
                })

            :
            <h4>No such a Found</h4>
           }
        
         
           </table>
           </>
        )
    }
// //map use to evry time key used first parent added 


}

export default Mounting

//*side effects

//http req






