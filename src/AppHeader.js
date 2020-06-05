import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class AppHeader extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-sm-10">
              <h1>My React Expense Tracker</h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
