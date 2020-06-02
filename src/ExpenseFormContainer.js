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
      expenses: [],
    };
  }

  componentDidMount = () => {
    // console.log(this.state.expense);
    // console.log(this.state.expenses);
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // add item expense
    debugger

    // const data = new FormData(event.target);
    // const expense = JSON.stringify(Object.fromEntries(data));

    this.setState((prevState) => {
      const expenses = prevState.expenses

      // console.log(expense)
      // expenses.push(expense)

      console.log(expenses)
      return [ ...expenses ]
    });
  };

  render() {
    return (
      <div>
        <ExpenseComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          expense={this.state.expense}
        />
        <ExpensesTable expenses={this.state.expenses} />
      </div>
    );
  }
}

export default ExpenseFormContainer;
