import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {
  
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        price={props.items[1].price}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        price={props.items[2].price}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        price={props.items[3].price}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
