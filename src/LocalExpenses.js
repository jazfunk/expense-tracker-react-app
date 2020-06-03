import React from "react"

const LocalExpenses = (props) => {
  localStorage.setItem("expenses", JSON.stringify(props.expenses))
}

export default LocalExpenses