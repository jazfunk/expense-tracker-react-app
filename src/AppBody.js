import React, { Component } from "react";
import ExpenseForm from "./ExpenseFormContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./SampleExpensesObject";
import ExpensesTable from "./ExpensesTable";

class AppBody extends Component {
  render() {
    return (
      <div className="container-fluid border">
        <ExpenseForm />
        <ExpensesTable expenses={Expenses} />
      </div>
    );
  }
}

export default AppBody;
