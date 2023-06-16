import React, { Component } from "react";
// import Thuchanh from "./Thuchanh";
class ThuchanhApp extends Component {
  render() {
    return (
      <div>
        <button
          style={{ background: this.props.background, color: this.props.color }}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default ThuchanhApp;
