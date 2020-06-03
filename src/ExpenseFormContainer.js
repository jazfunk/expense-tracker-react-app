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
    const addExpense = {
      expenseDate: this.state.expenseDate,
      expenseDescription: this.state.expenseDescription,
      expenseAmount: this.state.expenseAmount,
      expenseVendor: this.state.expenseVendor,      
    }
    
    const expenses = this.state.expenses;
    expenses.push(addExpense);
    console.log(expenses);
    this.setState({
      expenses: [...expenses]
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
