
//to use props-all is a  ui control anytime
//inject to find text visible to every time
//and difault parameters es-6 feture arguments not passed to, by default to defined 
//propsall is a object so to find a Destructure in the below
//ex: const Textcomp=({text})/// to call the text 
//parent to come in the color or any one and for injecting prop ui updated 
 

const Textcomp=(propsall)=>{
// console.log(propsall);
   

return(
<div>
<h3>{propsall.findtext}</h3>
{/* 
  <h4 style={{color:propsall}}></h4> */}

  </div>
)

}
export default Textcomp










