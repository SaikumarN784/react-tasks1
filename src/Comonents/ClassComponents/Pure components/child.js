//pure components:components that do not re-render when the value of props and state has been updated with the same values 

import { PureComponent } from "react";

 class Child extends PureComponent{
    render(){
        console.log("child render")
        return(
            <>
            <h>child components</h>
            </>
        )
    }
 }
export default Child




