import React from 'react';
import ExpenseItem from "../ExpensesItem/ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {

    if (props.items.length === 0)
        return (<h2 className="expenses-list__fallback">No Expenses Found!!</h2>)

    return (<ul className="expenses-list">
        {props.items.map(expense => {
            return (
                <ExpenseItem
                    title={expense.title}
                    price={expense.price}
                    date={expense.date}
                    key={expense.id}
                />);
        })}
    </ul>)
}

export default ExpensesList;
