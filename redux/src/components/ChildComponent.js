import React from'react';
export default class ChildComponent extends React.Component {

  render() {
    return (
      <div>
        {this.props.count}
          <button onClick={this.props.Increaseone}>+</button>
          <button onClick={this.props.Decreaseone}>-</button>
      </div>
    );

  }
}