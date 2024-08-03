import   React from'react';
import { ThemeContext,store} from './context';

import NewComponent from './ChildComponent';

export default class APP extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        store
        };    
    }
        _updateState(){
        const state=this.state.store.getState();
        this.setState({state});
    }
    componentDidMount() {
        this.state.store.subscribe(()=>this._updateState());
    }


render() {
        return(<ThemeContext.Provider value={{store:this.state.store}}>
            <NewComponent />
            </ThemeContext.Provider>
    )}
}