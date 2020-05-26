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

  showTestText() {
    console.log(
      `This id is ${this.state.id}, and this date is ${this.state.expenseDate}`
    );
  }

  componentDidMount() {
    const dateObject = new Date();
    const date = dateObject.getDate();
    console.log(date);
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
        <h1>Hello Expenses World</h1>
        <p>{this.state.id}</p>
        <p>{this.state.expenseDate}</p>
        <p>{this.state.expenseDescription}</p>
        <Button onClick={this.handleClick}>Click Me</Button>
      </div>
    );
  }
}

export default Expenses;
