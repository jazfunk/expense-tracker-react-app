import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class AppHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="container d-flex">
          <div className="row m-auto">
            <div className="col-sm-4">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-sm-8">
              <p>Evolving, living.</p>
              <a
                className="App-link"
                href="https://jeff-king.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                jeff-king.net
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
