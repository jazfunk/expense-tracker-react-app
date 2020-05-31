import React, { Component } from "react";

class LocalExpensesStroage extends Component {
  

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
    return setLocalExpenses
  }
}

export default LocalExpensesStroage;
