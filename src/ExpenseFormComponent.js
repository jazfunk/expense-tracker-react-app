import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ExpenseFormComponent(props) {
  return (
    <main>
      <form>
        <input
          name="expenseDate"
          value={props.expenses.expenseDate}
          onChange={props.handleChange}
          placeholder="Date"
        />
        <br />
        <input
          name="expenseDescription"
          value={props.expenses.expenseDescription}
          onChange={props.handleChange}
          placeholder="Description"
        />
        <br />
        <input
          name="expenseAmount"
          value={props.expenses.expenseAmount}
          onChange={props.handleChange}
          placeholder="Amount"
        />
        <br />
        <input
          name="expenseVendor"
          value={props.expenses.expenseVendor}
          onChange={props.handleChange}
          placeholder="Vendor"
        />
        <br />
        <button>Submit</button>
      </form>

      <hr />
      <h2>You entered:</h2>
      <p>{props.expenses.expenseDate}</p>
      <p>{props.expenses.expenseDescription}</p>
      <p>{props.expenses.expenseAmount}</p>
      <p>{props.expenses.expenseVendor}</p>
    </main>
  );
}

export default ExpenseFormComponent;
