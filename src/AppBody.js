import React, { Component } from "react";
import ExpenseForm from "./ExpenseFormContainer";
import SampleExpenses from "./SampleExpensesObject";
import ExpensesTable from "./ExpensesTable";
// import SavedExpenses from "./LocalExpensesStorage"

class AppBody extends Component {
  
  // setLocalExpenses = (newExpense) => {
  //   const savedExpenses = getSavedExpenses();  
  //   savedExpenses.push(newExpense);
  //   localStorage.setItem("expenses", JSON.stringify(savedExpenses));
  // };
  
  // getSavedExpenses = () => {
  //   return JSON.parse(window.localStorage.getItem("expenses")) || [];
  // };

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
