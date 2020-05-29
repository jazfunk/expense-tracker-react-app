import React, { Component } from "react";

// I don't know if I'm doing this right with props
// need to test and research
class LocalExpensesStroage extends Component {
  constructor(props) {
    super();
    this.state = {
      expenses: props.expenses,
    };
  }

  setLocalExpenses = (newExpense) => {
    const savedExpenses = getSavedExpenses;
    savedExpenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(savedExpenses));
  };

  getSavedExpenses = () => {
    return JSON.parse(window.localStorage.getItem("expenses")) || [];
  };

  render() {
    return savedExpenses;
  }
}

export default LocalExpensesStroage;
