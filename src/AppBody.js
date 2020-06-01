import React, { Component } from "react";
import ExpenseForm from "./ExpenseFormContainer";

class AppBody extends Component {

  render() {
    return (
      <div className="container-fluid border">
        <ExpenseForm />
      </div>
    );
  }
}

export default AppBody;
