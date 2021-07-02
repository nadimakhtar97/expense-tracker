import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  /* 
        This is multiple state concept :
        we can independently initialize multiple states and manage them.
        But there is also a way to manage multiple state as one state.
        NOTE: individual state management is better because it is independent
        of previous state of other variables.
    */

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* 
        By passing multiple state as one object in useState hook
        we can convert multiple state management into one state management.
        But there are some concepts behind this methods. So for simplicity
        it is better to use individual state management.
    */

  //   useState({
  //     enteredTitle: "",
  //     enteredPrice: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /*  The below method will work fine,
        Yet this method is not recommended in case of single state management because
        -->React schedules state updates it doesn't do it instantly so theoritically if 
        we schedule lots of state updates simultaneously then we may loose some of state
        updates.<--
    */
    // setUserInput({
    //   ...userInput, // we are using spread operator so that we don't loose the previous state.
    //   enteredTitle: event.target.value, // we are overriding the title value keeping previous state of other(date,price) variables intact.
    // });

    /*
        This method is recommended in case of single state management;
        Remember if state update depends on previous state(prevState) then use the below
        function form.
     */

    // setUserInput((prevState) => {
    //   return { ...userInput, enteredDate: event.target.value };
    // });
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);

    /*  The below method will work fine,
        Yet this method is not recommended in case of single state management because
        -->React schedules state updates it doesn't do it instantly so theoritically if 
        we schedule lots of state updates simultaneously then we may loose some of state
        updates.<--
    */
    // setUserInput({
    //   ...userInput, // we are using spread operator so that we don't loose the previous state.
    //   enteredPrice: event.target.value, // we are overriding the price value keeping previous state of other(date,title) variables intact.
    // });

    /*
        This method is recommended in case of single state management;
        Remember if state update depends on previous state(prevState) then use the below
        function form.
     */

    // setUserInput((prevState) => {
    //   return { ...userInput, enteredDate: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    /*  The below method will work fine,
        Yet this method is not recommended in case of single state management because
        -->React schedules state updates it doesn't do it instantly so theoritically if 
        we schedule lots of state updates simultaneously then we may loose some of state
        updates.<--
    */

    // setUserInput({
    //   ...userInput, // we are using spread operator so that we don't loose the previous state.
    //   enteredDate: event.target.value, // we are overriding the date value keeping previous state of other(title,price) variables intact.
    // });

    /*
        This method is recommended in case of single state management;
        Remember if state update depends on previous state(prevState) then use the below
        function form.
     */

    // setUserInput((prevState) => {
    //   return { ...userInput, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    setEnteredTitle(""); // for two way binding --> set the value of input filed to empty after form is submited;
    setEnteredPrice(""); // for two way binding --> set the value of input filed to empty after form is submited;
    setEnteredDate(""); // for two way binding --> set the value of input filed to empty after form is submited;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__contorls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text"
          value={enteredTitle}   // for two way binding.
          onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredPrice}   // for two way binding.
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}   // for two way binding.
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
