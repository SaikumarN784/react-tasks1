import Textcomp from "../all text-compo/text"

const Profiledata=()=>{


    const Object={
        name:"saikumar",
        age:"25",
        color:"orange"
    }

    const Object2={

        name:"surya",
        age:"22",
        color:"red"

    }

    return(
        <div>
  
        <Textcomp findtext ={Object.name} findcolor={Object.color}/>
        <Textcomp findtext ={Object2.name}  findcolor={Object2.color}/>

        </div>
//one component have a, props is a  many times passed and  to recived text.js
    )


}
export default Profiledata






