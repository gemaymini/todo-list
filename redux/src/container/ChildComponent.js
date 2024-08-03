import{connect}from'react-redux';
import ChildComponent from '../components/Child';
import{Increaseone,Decreaseone}from '../actions';

const mapStateToProps=state=>({
    count:state.count
})

const mapDispatchToProps=(dispatch)=>{
    return(
        {
            
        }
    )
}