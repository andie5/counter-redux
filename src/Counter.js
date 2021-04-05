import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./index";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };
  render() {
    return (
      <div className='counter'>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className='count'>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

// const mapDispatchToProps = {
//   increment: increment,
//   decrement: decrement,
// };

export default connect(mapStateToProps)(Counter);
