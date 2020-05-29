import React from "react";

function ExpenseFormComponent(props) {
  return (
    <main>
      <form className="form" onSubmit={props.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Date</span>
          </div>
          <input
            type="date"
            id="date"
            name="expenseDate"
            value={props.expenses.expenseDate}
            className="form-control"
            onChange={props.handleChange}
            placeholder="Date"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">What?</span>
          </div>
          <input
            type="text"
            id="description"
            name="expenseDescription"
            value={props.expenses.expenseDescription}
            className="form-control"
            onChange={props.handleChange}
            placeholder="Description"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Amount-$</span>
          </div>
          <input
            type="number"
            id="amount"
            name="expenseAmount"
            min=".00"
            step="any"
            value={props.expenses.expenseAmount}
            className="form-control"
            onChange={props.handleChange}
            placeholder="0.00"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Who?</span>
          </div>
          <input
            id="vendor"
            name="expenseVendor"
            value={props.expenses.expenseVendor}
            className="form-control"
            onChange={props.handleChange}
            placeholder="Vendor"
          />
        </div>

        <button className="btn-primary ml-3 mb-3">Add Expense</button>
      </form>
      {/* <hr />
      <h2>You entered:</h2>
      <p>{props.expenses.expenseDate}</p>
      <p>{props.expenses.expenseDescription}</p>
      <p>{props.expenses.expenseAmount}</p>
      <p>{props.expenses.expenseVendor}</p> */}
    </main>
  );
}

export default ExpenseFormComponent;
