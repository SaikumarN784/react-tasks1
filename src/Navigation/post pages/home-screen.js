//Api calling in the page load(use effcet) used
//to syntax not a assignment
//api so axios.get used
//to see ui part data collect to first (usestate used)
//ui part seens in the map is accept to callback used home scrren part
//data in pass cards use props to recived in function ({this type} ),to distructuring to take props and destructuring...

//nested distructring function :this one
//to dynamic route apply post route and dynamic to used onther screen created
//link tag uses to dynamic routing..paths
import { useEffect, useState } from "react"
import Heders from "../../Comonents/Functinal-Components/Heders/heders"
import axios from "axios"

import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import useAxios from "../../Comonents/Functinal-Components/Hooks/CustomHook/UseAxios";
import { BASE_PROD_URL, endpoints } from "../../Endpoints/endpoints";


const Homescreen=()=>{
//   const [data,Setdata]=useState([])
//   useEffect(()=>{
//          axios.get("https://fakestoreapi.com/products")
//            .then(response=>{
//            if(response.status===200){
//                Setdata(response.data)
//    }
//       })
//               .catch(err=>console.log(err))
//           },[])
//import useaxios returned the array {distructring}
      //  const [data]= useAxios(`${BASE_PROD_URL}${endpoints.products}`)
      const [data]=useAxios(`${BASE_PROD_URL}${endpoints.products}`)
      const [day,setday]= useState(null)
   //page load to use effect used
   useEffect(()=>{
    //(new date().gethours())
    // setday(getToday())
  setday(getGreeting())
   },[])
       //date see on the ui take a fun

       function getToday(){
   let day;
   console.log(new Date().getDay())

         switch(new Date().getDay()){
          case 0 :
            day="SATURDAY"
            break;
            case 1:
              day="MONDAY"
              break;
              case 2 :
                day="TUESDAY"
                break;
                default : 
                day=null
         
        }
        return day
          
       } 
       //greet the user based on the time gm gn gn funuctuin
           function getGreeting(){
            const timingHours = new Date().getHours() 
               let greeting;
               if(timingHours>6 && timingHours<11){
                greeting="good morning"
               }
               else if(timingHours>=11 && timingHours <16){
                greeting="good afternoon"
               }
               else if (timingHours>=16 && timingHours<18){
                greeting="good evening"
               }
               else{
                greeting="good night"
               }
               return greeting
           }
     return(
      <>
             <Heders/>

        <h1>Am Home screens</h1>
          {
         //checked the page
             data.length>0
                  ?
    data.map((eachobject)=>{
            return(
               <>
               <h2>{day}</h2>
              <Mycards data={eachobject}/> 
               </>
           )
           })
             :
             <h3>wait for min</h3>
}
      </>  
    )
}

      export default Homescreen



function Mycards(props) {
  const {data:{image,category,price,description,title,id}}=props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
       <button>
        <Link to={`/${category}/${id}`}>
        Navigate
        </Link>
       </button>
      </Card.Body>
    </Card>
  );
}

//generally data-updation  newdate (constructore related dates gathering)
//dates:sub objects   .getDay()------->0 to 6




