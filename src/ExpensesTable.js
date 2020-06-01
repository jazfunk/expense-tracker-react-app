import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const ExpensesTable = (props) => {
  const renderExpense = (expense, index) => {
    debugger;
    if (props.expenses.length > 0) {
      return (
        <tr key={index}>
          <td>{expense.expenseDate}</td>
          <td>{expense.expenseDescription}</td>
          <td>{expense.expenseAmount}</td>
          <td>{expense.expenseVendor}</td>
          <td>
            <ReactBootStrap.Button
              id={index}
              name="deleteButton"
              className="btn btn-danger"
            >
              X
            </ReactBootStrap.Button>
          </td>
        </tr>
      );
    }
  };

  // console.log(props)

  // debugger
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Vendor</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{props.expenses.map(renderExpense)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default ExpensesTable;
