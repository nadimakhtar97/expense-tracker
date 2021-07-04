import Expenses from "./components/Expenses/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense/NewExpense";

const INTITIAL_EXPENSES = [
  {
    id: "e1",
    date: new Date(2020, 8, 25),
    title: "Car Insurance",
    price: 200,
  },
  {
    id: "e2",
    date: new Date(2021, 2, 28),
    title: "Book",
    price: 300,
  },
  {
    id: "e3",
    date: new Date(2022, 3, 21),
    title: "Grocery",
    price: 150,
  },

  {
    id: "e4",
    date: new Date(2019, 6, 12),
    title: "Travel",
    price: 250,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INTITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  /* This javascript equivalent code for JSX
    React under the hood converts JSX in this format
    making development easy.
 */

  //  return React.createElement(
  //      'div',
  //      {},
  //      React.createElement('h1',{},"let's get started!"),
  //      React.createElement(Expenses,{items: expenses})
  // );

  return (
    <div>
      {/* "LIFTING THE STATE UP" */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
