// import Tablecomp from "./Components/Functional-components/Tables/tablecomp1"
// import MapUsing from "./Components/map-use compo/map"

// import Mounting from "./Comonents/Functinal-Components/axios/Mounting/Mounting phase"

import Circleshape from "./Comonents/Functinal-Components/ClassComponents/circle task/Circle"

// import ProductApi from "./Comonents/Functinal-Components/axios/products"

// import Newproducts from "./Comonents/Functinal-Components/ClassComponents/DAY2/Classbase"

// import SomeProduct from "./Comonents/Functinal-Components/ClassComponents/Products.js/someproducts"
// import YoutubeButton from "./Comonents/Functinal-Components/ClassComponents/youtubebutton"

// import Buttoncampo from "./Comonents/Functinal-Components/Buttons/button"
// import Imagescomp from "./Comonents/Functinal-Components/image-comp/images"
// import Headboot from "./Comonents/Functinal-Components/Bootstrap-react/bootstrap"
// import SararyHike from "./Comonents/Functinal-Components/ClassComponents/Salarycompo"
// import Imagescomp from "./Comonents/Functinal-Components/image-comp/images"
// import Buttoncampo from "./Components/button-comp/button"
// import Profiledata from "./Components/Task2-components/oneprofile"
// import { FormFloating } from "react-bootstrap"

function App(){
  
  return(


    <div>
      {/* <Mounting/> */}
      <Circleshape/>
      {/* <ProductApi/> */}
      {/* <SomeProduct/> */}
      {/* <YoutubeButton/> */}
      {/* <Headboot/> */}
      {/* <Imagescomp/> */}
{/* <SararyHike/>  */}
    {/* /<Newproducts/> */}
      {/* <h1>HELLO WORLD</h1> */}
     {/* <Buttoncampo/> */}
      {/* <Profiledata/> */}
{/* <Buttoncampo /> */}
    {/* <Tablecomp/> */}
    {/* <MapUsing/> */}

    </div>
  )
}

export default App

//API:Application programming interface ,it acts a middile ware between client side and server side and vice versa

//1.get request :from server to client side data retrieval
//2:Post Request:data from client side to server side 
//3:delete request: removel of data from server side 
//4.Put request:to update the existing data in server  
//5.patch request:update with nested objects in server side 

//API call: Fetch is used .fetch is a browser web api which to ussed for making http calls or  api calls 
//fetch will return a promise : we can collect by .than or .catch 
//promise used to either i can use{by using}  asynk and  await keyword also
//and  ** we can collect by using  
      //fetch response json converted to promise collect cheyali
//fetch(url,{{based on the method}}){promise collect .then}.then(res=>res.json()).then=>console.log(res).catch(err=>console.log(err))

 //fetch is a alternate :Axios
 //***axios is a third party library which is used to make http request more effienctly..

//post man: its a tool for testing of API