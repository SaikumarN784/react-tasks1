import { Component } from "react";


class Circleshape extends Component{
    state={
        circles:[]
    }

addCircles=()=>{
    this.setState(
        {
            circles:[...this.state.circles,false ]
        }
    ) 
}

changecolor=(index)=>{
console.log(index,this.state.circles);
}
    render(){
        return(
            <>
            <button onClick={this.addCircles} >click to add circles</button>
            <h2>Total circles--{this.state.circles.length}</h2>


  {
    this.state.circles.map((Element,index)=><Uicompo IsHighlight={Element} changecolor={this.changecolor} index={index}  />)
  }
            </>
          
        )
    }
}

export default Circleshape

   class Uicompo extends Component{

    render(){
       console.log(this.props.IsHighlight);


        return(
            <div style={{border:"2px solid black",width:150,height:150,borderRadius:"70%",backgroundColor:this.props.IsHighlight? "black":null}}
               onClick={()=>this.props.changecolor(this.props.index)}
            >
             
            </div>

        )
    }

   }







