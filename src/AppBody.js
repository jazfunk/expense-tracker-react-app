import React, { Component } from "react";
import ExpenseForm from "./ExpenseFormContainer";
import SampleExpenses from "./SampleExpensesObject";
import ExpensesTable from "./ExpensesTable";

class AppBody extends Component {
  render() {
    return (
      <div className="container-fluid border">
        <ExpenseForm />
        <ExpensesTable expenses={SampleExpenses} />
      </div>
    );
  }
}

export default AppBody;
