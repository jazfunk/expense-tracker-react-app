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

  componentDidMount() {
    // const dateObject = new Date();
    // const date = dateObject.getDate();
    // this.setState((prevState) => {
    //   if (prevState.id === null) {
    //     return {
    //       id: 0,
    //       expenseDate: date,
    //       expenseDescription: "",
    //       expenseAmount: 0,
    //       expenseVendor: "",
    //     };
    //   }
    // });
  }

  handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {  
    return (
      <ExpenseComponent
        handleChange={this.handleChange}
        expenses={this.state}
      />
    );
  }
}

export default ExpenseFormContainer;
