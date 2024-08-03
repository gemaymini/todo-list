import React from "react";
import { ThemeContext } from "./context";

const connect=(mapStateToprops , mapDispatchToProps)=>(Component)=>
  class WrappedComponent extends React.Component{
    render(){

        return(
            <ThemeContext.Consumer>
                {
                    context=>{
                        const stateProps=mapStateToprops?mapStateToprops(context.store.getState()):{};
                        const dispatchProps=mapDispatchToProps?mapDispatchToProps(context.store.dispatch):{};
                        const allProps={...stateProps,...dispatchProps,...this.props};
                        console.log(stateProps);

                        return( <Component {...allProps} />)
                    }
                    
                }
            </ThemeContext.Consumer>
        )
    }
  }
export default connect;