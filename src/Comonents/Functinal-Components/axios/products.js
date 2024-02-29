// import axios from "axios"


const ProductApi = ()=>{

  

   const  fetchdata = async ()=>{
                 //hit the server using axios 
    // axios.get("https://fakestoreapi.com/products")
    // .then(response=>console.log(response))
    // .catch(err=>console.log(err))

           //hit the server using fetch 
// fetch("https://fakestoreapi.com/products")
// .then(response=>response.json())
// .then(response=>console.log(response))
  let response1= await fetch("https://fakestoreapi.com/products")
  let finalresponse=await response1.json()
  console.log(finalresponse);
//  then chains nonstop so elimanted by aynk await to simipiler syntax regular funtion added
//  regular function asynk added asynk functionto added "before starting the function"
       
         //hit the server aynk await
//    
 
   }

    return(
        <>
        
        <button onClick={fetchdata}>Fetch Data</button>
        
        </>
    )
}
export default ProductApi



