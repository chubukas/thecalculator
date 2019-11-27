import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={`colum-${this.props.cols}`}>
        <button
          className="calButton"
          onClick={() => this.props.action(this.props.symbol)}
        >
          {this.props.symbol}
        </button>
      </div>
    );
  }
}

export default Button;
