import React, { Component } from "react";
import ExpenseFormContainer from "./ExpenseFormContainer";

class AppBody extends Component {

  render = () => {
    return (
      <div className="container">
        <ExpenseFormContainer />
      </div>
    );
  }
}

export default AppBody;
