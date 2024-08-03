import React from'react';

const createStore=(reducer)=>{
    let state={
        count:1
    };
    let getState=()=>{

        return state;
    };
    let listeners=[];
    let subscribe=(listener)=>{
        listeners.push(listener);
    }
    let dispatch=(action)=>{
        state=reducer(state,action);
        listeners.forEach(listener=>listener());
    }
    dispatch({});
    return {subscribe,getState,dispatch};
    
}

function reducer(state,action){
    if(!state)
    {
        state={count:1};
    }
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1};

        case 'DECREMENT':
            return {count:state.count-1};
        default:
            return state;
    }
}

export const store=createStore(reducer);

export const ThemeContext=React.createContext({
    store
});