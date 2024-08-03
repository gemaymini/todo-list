export default function reducer(state, action) {
    if(!state)
    {
        state={
            count:1
        }
    };
    switch(action.type)
    {
        case 'INCREMENT':
            state.count++;
            break;
        case 'DECREMENT':
            state.count-1;
            break;
        default:break;
    }
        return {...state};
    }
