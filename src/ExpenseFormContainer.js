import React, { Component } from "react";
import ExpenseComponent from "./ExpenseFormComponent";

class ExpenseFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      expenseDate: "",
      expenseDescription: "",
      expenseAmount: 0,
      expenseVendor: "",
      expenses: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // add item expense
    // It's unclear to me what to do from here
    // I need to take the expense object from the form
    // Add it to the object array that populates the table
    // Save it to local storage
    // Realod from local storage?
    const data = new FormData(event.target);
    const expense = JSON.stringify(Object.fromEntries(data))
    console.log(expense);
  }

  render() {
    return (
      <ExpenseComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        expense={this.state}
      />
    );
  }
}

export default ExpenseFormContainer;
