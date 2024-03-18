import NavigationStack from "./Navigation/navigation"



function App(){
  return(


    <div>
   
<NavigationStack/>


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

// additinal information added sysntax wise * props :parent to childrean  for communication purpose

//Prop Drilling:prop drilling is basically a situation where data has to be pass through a nested levels to reach the final component
//prop driling props data all level down
//state management:if the state is managed with in component we call it as a local state managment

//global state managemengt:if the state managed globally ,we call it as a global state mangement 
//to eliminate the prop driling we need manage the state globally 2 ways of the
 //1.context api----medium level applications
 //this two solutions used to the state manage do it..// 2. redux --- for larger level applications we can prefer redux (which enables more feutures and its powerfull)
