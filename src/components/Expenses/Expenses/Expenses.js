import React, {useState} from "react";
import ExpensesList from '../ExpensesList/ExpensesList';
import Card from "../../UI/Card/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "../ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear;
    })



    return (
        <Card className="expenses">
            {/* two way binding or controlled component */}
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>

            {/* In java script if first argument in and operation is true then it returns the second
                argument.
            */}
            {/*{filteredExpenses.length === 0 && <p>No expenses found!!</p>}*/}

            {/*{filteredExpenses.length > 0 && filteredExpenses.map((expense) => {*/}
            {/*    return (*/}
            {/*        <ExpenseItem*/}
            {/*            title={expense.title}*/}
            {/*            price={expense.price}*/}
            {/*            date={expense.date}*/}
            {/*            key={expense.id}*/}
            {/*        />*/}
            {/*    );*/}
            {/*})}*/}

            {/* We are using javascript property of "AND" operator to short the code below*/}

            {/*{filteredExpenses.length === 0 ? <p>No expenses found!!</p> : filteredExpenses.map((expense) => {*/}
            {/*    return (*/}
            {/*        <ExpenseItem*/}
            {/*            title={expense.title}*/}
            {/*            price={expense.price}*/}
            {/*            date={expense.date}*/}
            {/*            key={expense.id}*/}
            {/*        />*/}
            {/*    );*/}
            {/*})}*/}

        </Card>
    );
};

export default Expenses;
