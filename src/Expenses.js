import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class Expenses extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      expenseDate: null,
      expenseDescription: null,
      expenseAmount: null,
      expenseVendor: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const dateObject = new Date()
    const date = dateObject.getDate()
    this.setState((prevState) => {
      if (prevState.id === null) {
        return {
          id: 0,
          expenseDate: date,
        };
      }
    });
  }

  handleClick(e) {
    let expenseDescription = "Test Description";
    this.setState((prevState) => {
      expenseDescription =
        prevState.expenseDescription === null
          ? "Newly Intialized Description"
          : "Reinitialized Description";
      return {
        expenseDescription: expenseDescription,
      };
    });
  }

  render() {
    return (
      <div>
        <p>Expense Id:  {this.state.id}</p>
        <p>Today is day {this.state.expenseDate} of this month</p>
        <p>Description:  {this.state.expenseDescription}</p>
        <Button onClick={this.handleClick}>Click Me</Button>
        <h3>Expense Tracker</h3>
      </div>
    );
  }
}

export default Expenses;
