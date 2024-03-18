//route of dynamic ecah product has diffrent based on the id diffrent ids loaded so
//USeparms is used product screens 
//to routeinform id's seens the product scrren to added page load the api call the api to used "USEEFFECT"Hook trigar lo every products seens ids  ," dependency array "
//useparms:ia a react router dom hook which collect the id from the url/endpoints **
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

//is a react router dom hook which collect the id from the url/end point nd use of the top of the component -- is a react router -dom Hook 
//to api hit the userformation displayed state collected to the to use again i have to use the "useeffect" hook
const ProductDetail = ()=>{

const [Product,setProduct]=useState({})
    
 const routeInformation= useParams()
 console.log(routeInformation,"routerinform")

    useEffect(()=>{
//fecth the data related to the product
        fetchdata()
            
    },[routeInformation.id])
    //function to calling in the useeffect
  
    const fetchdata =()=>{
            axios.get(`https://fakestoreapi.com/products/${routeInformation.id}`)
            .then(response=>{
                if(response.status === 200){
                    setProduct(response.data)
                }
            })
        }
    
    return(
<>
{/* <h3>iam product screen</h3> */}
{
      Object.keys(Product).length>0
      ?
      <>
    <h1>{Product.title}</h1>
    <img src={Product.image} alt="" width={200} height={200}/> 
      <h4 style={{color:"red"}}>{Product.price}</h4>
      <h2>{Product.description}</h2> 
      </>
      :
      <h4>wait for a min</h4>
}
</>
    )
}

export default ProductDetail



