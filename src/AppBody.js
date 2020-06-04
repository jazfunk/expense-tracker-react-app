import React, { Component } from "react";
import ExpenseForm from "./ExpenseFormContainer";

class AppBody extends Component {

  render() {
    return (
      <div className="container">
        <ExpenseForm />
      </div>
    );
  }
}

export default AppBody;
