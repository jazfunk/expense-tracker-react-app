import React, { Component } from "react";

class LocalExpensesStroage extends Component {
  

  setLocalExpenses = (props) => {
    const savedExpenses = getSavedExpenses;
    savedExpenses.push(props.expense);
    localStorage.setItem("expenses", JSON.stringify(savedExpenses));
  };

  getSavedExpenses = () => {
    return JSON.parse(window.localStorage.getItem("expenses")) || [];
  };

  render() {
    this.setLocalExpenses
    return savedExpenses;
  }
}

export default LocalExpensesStroage;
