import React, { Component } from "react"

class Expense extends Component {
  render() {
    const renderExpense = () => {
      return {
        expenseDate: props.expenseDate,
        expenseDescription: props.expenseDescription,
        expenseVendor: props.expenseVendor,
        expenseAmount: props.expenseAmount,
      };
    };

    return renderExpense
  }
}

export default Expense
