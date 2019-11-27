import React, { Component } from "react";
import "./css/style.css";
import Button from "./components/buttons";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "0",
      previous: [],
      nextReset: false
    };
  }

  reset = () => {
    this.setState({ current: "0" });
  };

  addToCurrent = symbol => {
    if (["/", "*", "-", "+"].indexOf(symbol) > -1) {
      let { previous } = this.state;
      previous.push(this.state.current + symbol);
      this.setState({ previous, nextReset: true });
    } else {
      if (
        (this.state.current === "0" && symbol !== ".") ||
        this.state.nextReset
      ) {
        this.setState({ current: symbol, nextReset: false });
      } else {
        this.setState({ current: this.state.current + symbol });
      }
    }
  };

  addIt = symbol => {
    if (this.state.previous.length > 0) {
      let current = eval(
        String(
          this.state.previous[this.state.previous.length - 1] +
            this.state.current
        )
      );
      this.setState({ current, previous: [], nextReset: true });
    }
  };
  render() {
    const buttons = [
      { symbol: "C", col: 3, action: this.reset },
      { symbol: "/", col: 1, action: this.addToCurrent },
      { symbol: "7", col: 1, action: this.addToCurrent },
      { symbol: "8", col: 1, action: this.addToCurrent },
      { symbol: "9", col: 1, action: this.addToCurrent },
      { symbol: "*", col: 1, action: this.addToCurrent },
      { symbol: "4", col: 1, action: this.addToCurrent },
      { symbol: "5", col: 1, action: this.addToCurrent },
      { symbol: "6", col: 1, action: this.addToCurrent },
      { symbol: "-", col: 1, action: this.addToCurrent },
      { symbol: "1", col: 1, action: this.addToCurrent },
      { symbol: "2", col: 1, action: this.addToCurrent },
      { symbol: "3", col: 1, action: this.addToCurrent },
      { symbol: "+", col: 1, action: this.addToCurrent },
      { symbol: "0", col: 2, action: this.addToCurrent },
      { symbol: ".", col: 1, action: this.addToCurrent },
      { symbol: "=", col: 1, action: this.addIt }
    ];
    return (
      <div className="App">
        {this.state.previous.length > 0 ? (
          <div className="floatUp">
            {this.state.previous[this.state.previous.length - 1]}
          </div>
        ) : null}
        <input className="inputField" type="text" value={this.state.current} />
        <br></br>
        {buttons.map((btn, i) => {
          return (
            <Button
              key={i}
              symbol={btn.symbol}
              cols={btn.col}
              action={item => btn.action(item)}
            ></Button>
          );
        })}
      </div>
    );
  }
}
export default App;
