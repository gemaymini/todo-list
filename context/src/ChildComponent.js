import React from "react";
import connect from "./connect";
class ChildComponent extends React.Component{
    render(){

       return( 
        
        <div>
            {this.props.count}
            <button onClick={()=>{this.props.INCREMENT()}}>Add 1</button>
            <button onClick={()=>{this.props.DECREMENT()}}>Sub 1</button> 
        </div>


    );}
}
const mapStateToprops=(state)=>{
    return{
        count:state.count
    };
}
const mapDispatchToProps=dispatch=>{
    return{
        INCREMENT:()=>dispatch({type:"INCREMENT"}),
        DECREMENT:()=>dispatch({type:"DECREMENT"})
    }
}
export default connect(mapStateToprops,mapDispatchToProps)(ChildComponent);