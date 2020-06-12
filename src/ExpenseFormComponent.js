import React from "react";

const ExpenseFormComponent = (props) => {
  return (
    <main>
      <form className="form" onSubmit={props.handleSubmit}>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">Date</span>
          </div>
          <input
            type="date"
            id="date"
            name="expenseDate"
            value={props.expenseDate}
            className="form-control"
            onChange={props.handleChange}
            required={true}
          />
        </div>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">Item</span>
          </div>
          <input
            type="text"
            id="description"
            name="expenseDescription"
            value={props.expenseDescription}
            className="form-control"
            onChange={props.handleChange}
            placeholder="Describe item(s) purchased"
            required={true}
          />
        </div>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">Vendor</span>
          </div>
          <input
            id="vendor"
            name="expenseVendor"
            value={props.expenseVendor}
            className="form-control"
            onChange={props.handleChange}
            placeholder="Where item(s) purchased"
            required={true}
          />
        </div>
        
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            type="number"
            id="amount"
            name="expenseAmount"
            min=".00"
            step="any"
            value={props.expenseAmount}
            className="form-control"
            placeholder="0.00"
            onChange={props.handleChange}
            required={true}
          />
        </div>

        <button className="btn-primary mb-2">Add Expense</button>
      </form>
    </main>
  );
}

export default ExpenseFormComponent;