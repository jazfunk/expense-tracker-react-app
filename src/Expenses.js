import React, { Component } from "react";

class Expenses extends Component {

  setLocalExpenses = (props) => {
    const savedExpenses = getSavedExpenses;
    savedExpenses.push(props.expense);
    localStorage.setItem("expenses", JSON.stringify(savedExpenses));
    return savedExpenses
  };

  getSavedExpenses = () => {
    return JSON.parse(window.localStorage.getItem("expenses")) || [];
  };

  render() {
    return (
      // Take an Expense object (props)
      // Add to localstorage
      // Render return Expenses object populated from localstorage
      this.setLocalExpenses
    );
  }
}

export default Expenses;
