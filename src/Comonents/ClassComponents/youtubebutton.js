import { Component } from "react"
////one to instraction doing on state created 
//one state change to set state method
//to accept  *object is mandatiry   *callback  * arrow 

class YoutubeButton extends Component{

    constructor(){
        super()
        this.state={
            isSubscribed:false 
        }  
    }
handlesubscribe=()=>{

    this.setState(
        {
            isSubscribed: ! this.state.isSubscribed
        }
    )




}
    


    render(){
        return(
<div>
            <button onClick={this.handlesubscribe}>{this.isSubscribed?"un-subscribe":"please subcribe"}</button>
            
          
{
   this.state.isSubscribed ? <h3>welcome user</h3>:null
}
</div>
        )
    }
}
export default YoutubeButton












