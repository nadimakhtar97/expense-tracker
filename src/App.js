import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(2020, 2, 28),
      title: "Car Insurance",
      price: 200,
    },
    {
      id: "e2",
      date: new Date(2021, 2, 28),
      title: "Car Insurance",
      price: 300,
    },
    {
      id: "e3",
      date: new Date(2022, 2, 28),
      title: "Car Insurance",
      price: 500,
    },
    {
      id: "e3",
      date: new Date(2023, 2, 28),
      title: "Car Insurance",
      price: 400,
    },
  ];

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
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
