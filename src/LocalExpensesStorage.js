import React, { Component } from "react";

class LocalExpensesStroage extends Component {

  savedExpenses = () => JSON.parse(window.localStorage.getItem("expenses")) || [];
  
  newExpenses = [...this.savedExpenses,...this.props.expenses]

  // setLocalExpenses = (props) => {
  //   const savedExpenses = getSavedExpenses;
  //   savedExpenses.push(props.expense);
  //   localStorage.setItem("expenses", JSON.stringify(savedExpenses));
  //   return savedExpenses
  // };

  render() {
    return (
         
    )
  }
}

export default LocalExpensesStroage;
