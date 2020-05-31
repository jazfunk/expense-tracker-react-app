import React, { Component } from "react";
import ExpenseForm from "./ExpenseFormContainer";
import SampleExpenses from "./SampleExpensesObject";
import ExpensesTable from "./ExpensesTable";
// import SavedExpenses from "./LocalExpensesStorage"

class AppBody extends Component {

  render() {
    return (
      <div className="container-fluid border">
        <ExpenseForm />
        <ExpensesTable expenses={SampleExpenses} />
        {/* <ExpensesTable expenses={this.getSavedExpenses} /> */}
      </div>
    );
  }
}

export default AppBody;
