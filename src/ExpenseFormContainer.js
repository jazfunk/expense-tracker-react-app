import React, { Component } from "react";
import ExpenseComponent from "./ExpenseFormComponent";
import "bootstrap/dist/css/bootstrap.min.css";

class ExpenseFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      expenseDate: "",
      expenseDescription: "",
      expenseAmount: 0,
      expenseVendor: "",
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
    event.preventDefault()
    // add item expense
  }

  render() {
    return (
      <ExpenseComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        expenses={this.state}
      />
    );
  }
}

export default ExpenseFormContainer;