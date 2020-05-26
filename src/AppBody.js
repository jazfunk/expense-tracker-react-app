import React, { Component } from "react";
import Expenses from "./Expenses";
import "bootstrap/dist/css/bootstrap.min.css";

class AppBody extends Component {
  render() {
    return (
      <div className="App-body">
        <Expenses />
      </div>
    );
  }
}

export default AppBody;
