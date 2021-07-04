import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    // "LIFTING THE STATE UP"
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/*
        onSaveExpenseDataHandler is used to pass data from child to parent.
        "LIFTING THE STATE UP"
      */}
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
