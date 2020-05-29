import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class AppHeader extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid p-0 m-0 border">
          <div className="row">
            <div className="col-sm-2 p-2 my-0 border">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-sm-10 p-2 my-0 border">
              <h1>Expense Tracker</h1>
              <h4>with React & Bootstrap 4</h4>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
