import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import moment from "moment";

const ExpensesTable = (props) => {
  let expenses = props.expenses.map((expense, index) => {  
      const dateMoment = moment(expense.expenseDate);
      let amount;
            
      try {
        amount = parseFloat(expense.expenseAmount);
      } catch (error) {
        amount = 0;
      }

      const amountFormatted = `$${amount.toFixed(2)}`;

      return (
        <tr key={index}>
          <td className="align-middle">{dateMoment.format("MM-DD-YYYY")}</td>
          <td className="align-middle text-left">
            {expense.expenseDescription}
          </td>
          <td className="align-middle text-left">{expense.expenseVendor}</td>
          <td className="align-middle text-right">{amountFormatted}</td>
          <td className="align-middle">
            <ReactBootStrap.Button
              id={index}
              name="deleteButton"
              className="btn-danger btn-sm"
              onClick={props.handleDelete}
            >
              X
            </ReactBootStrap.Button>
          </td>
        </tr>
      );
  });

  expenses = expenses.length === 0
    ? <tr><td colspan="5">No expenses have been added!</td></tr>
    : expenses;

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{expenses}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default ExpensesTable;
