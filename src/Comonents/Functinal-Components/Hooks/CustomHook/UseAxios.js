//api to data need to used axios; nd used to home ,detail pages 
//any side get una api "axios.get func" bt now create the hook desingned and  at time axios get call high hook call and hook to data collected to ui seens  ..
//mean of inistead of making components axios use heavey so hook used  to code flow diverting;

import axios from "axios"
import { useEffect, useState } from "react"


//api call page load avlnte  "useeffcet triger doing and data collecting at the same time again usestate used two things"
//state create to [data,setdata]  collect and used to (prasentatinal layer {screen})

//we designed the hook logics extractr are apply home-screen  (resusing in the functinality using custom hooks)

const useAxios = (url)=>{
    const [data,setData] = useState([]) //array get list of products came so;
     const [err,seterr] = useState(null)
 
    useEffect(()=>{

        // axios.get("https://fakestoreapi.com/products") //this prodcts dynamic changed url create to collect nd passed to home -screen
        try{
         axios.get(url)      // to reciveed to HIT nd collect return to distructring data seens
        .then(response=>{
          if(response.status===200){
              setData(response.data) 
  }
     })
     .catch(err=>console.log(err)) //one promise reject the catch 

        }catch(err){              //some error hacker  if any according in the axios and url(data) not coming issue this catch is goes on     
            console.log(err)
            seterr(err)
        }finally{
         //stop the loading process user msg seens smtg "pls wait ex:---" toast msgs success:green failure :red 
         console.log("am always excutable")  
            
        }
         },[])

return [data]


}

export default  useAxios

   //try catch try chsthe code flow goes to" axios" and at the same url to fecth chesthunam; and axios or url mistake in it will directy go to the catch block going 
   //error vathe seterror data  create usestate the seens the ui set chstham
//ance a paticular of the time api call get to "that must be under a {try,catch save in}" ;
//catch:
//finally :code always either goes to the "try" , smtg mistake goes to the "catch", errespective of the {try or catch} will code always goes to the "finally block" i have to stop the loader
 //so every api call must be wrapping goes try nd catch finally block (try to use catch mandatory )


 //this part of chnage to api anywhere use to run; hook not use to directy chnages home  about try catch changes ,so this page to hook created to designed ,it will handle globally doing...

 //q:how to handle in the errors in js
//by using try catch finally we can using handle errors in the js,s.smtg will hpns wrong we can goes to the catch ,if everthing ok goes to the try , but even those catch or try goes the finally(is the option) came;


//authontication://identy to the particullar user, this is verfied user; ex:register otp login chances  that is the user called "autho" 
//autherization///  every aunthonticated user all are authonticated ex: youtube separate primium a/c not a same screens this content refer to the(access rights denoted ) "authurization" ; every user is authonticat user only specific rights users are the :arthorized users;
//ex:admin nd user rights are diffrented 
