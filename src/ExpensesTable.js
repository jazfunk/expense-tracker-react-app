import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import moment from "moment"

const ExpensesTable = (props) => {
  const renderExpense = (expense, index) => {
    if (props.expenses.length > 0) {
      const dateMoment = moment(expense.expenseDate)      
      const amountToFormat = `$${expense.expenseAmount}`      
      return (
        <tr key={index}>
          <td className="align-middle">{dateMoment.format('MM-DD-YYYY')}</td>
          <td className="align-middle text-left">{expense.expenseDescription}</td>
          <td className="align-middle text-right">{amountToFormat}</td>
          <td className="align-middle text-left">{expense.expenseVendor}</td>
          <td className="align-middle">
            <ReactBootStrap.Button
              id={index}
              name="deleteButton"
              className="btn-danger"
              onClick={props.handleDelete}
            >
              X
            </ReactBootStrap.Button>
          </td>
        </tr>
      );
    }
  };

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
