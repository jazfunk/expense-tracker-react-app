import React, { Component } from "react";
import ExpenseComponent from "./ExpenseFormComponent";
import ExpensesTable from "./ExpensesTable";

class ExpenseFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      expense: {
        expenseDate: "",
        expenseDescription: "",
        expenseAmount: 0,
        expenseVendor: "",
      },
      expenses: [{}],
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    // check for local storage here
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // add item expense
    // It's unclear to me what to do from here
    // I need to take the expense object from the form
    // Add it to the object array that populates the table
    // Save it to local storage
    // Realod from local storage?
    const data = new FormData(event.target);
    const expense = JSON.stringify(Object.fromEntries(data));
    this.setState((prevState) => {
      const expenses = prevState.expenses;
      expenses.push(expense);
      return {
        expenses: { expenses },
      };
    });
    console.log(this.state.expenses)
    console.log(this.state.expense)
  }

  render() {
    return (
      <div>
        <ExpenseComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          expense={this.state.newExpense}
        />
        <ExpensesTable expenses={this.state.expenses} />
      </div>
    );
  }
}

export default ExpenseFormContainer;
