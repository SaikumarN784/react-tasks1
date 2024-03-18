import { Component } from "react";
import Child from "./child";



class Parentcompo extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    handlecount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        console.log("parent render")
        return(
            <>
            <h3>parent components</h3>
            <h3>state change {this.state.count}</h3>
            <button onClick={this.handlecount}>click to chnage state </button>
            <Child data={this.state.count}/>
            </>
        )
    }


}

export default Parentcompo