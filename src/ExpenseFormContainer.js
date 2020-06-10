import React, { Component } from "react";
import ExpenseFormComponent from "./ExpenseFormComponent";
import ExpensesTable from "./ExpensesTable";

class ExpenseFormContainer extends Component {
  constructor() {
    super()
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

  componentDidMount= () => {
    const savedExpenses = JSON.parse(window.localStorage.getItem("expenses")) || []
    this.setState({
      expenses: [...savedExpenses],
    });
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()    
    const expense = {
      expenseDate: this.state.expenseDate,
      expenseDescription: this.state.expenseDescription,
      expenseAmount: this.state.expenseAmount,
      expenseVendor: this.state.expenseVendor,
    };

    const expenses = this.state.expenses
    expenses.push(expense);
    this.setState({
      expenses: [...expenses],
    });
  };

  handleDelete = (event) => {
    event.preventDefault();
    const expenses = this.state.expenses
    expenses.splice(event.target.id, 1)
    this.setState({
      expenses: [...expenses],
    })
  }

  componentDidUpdate = () => {
    localStorage.setItem("expenses", JSON.stringify(this.state.expenses));
  }
  
  render = () => {
    return (
      <div>
        <ExpenseFormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          expense={this.state.expense}
        />
        <ExpensesTable 
          expenses={this.state.expenses} 
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default ExpenseFormContainer