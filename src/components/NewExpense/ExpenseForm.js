import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm() {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  //THE ABOVE APPROACH MAKES USE OF THREE SEPARATE STATES. WE CAN ALSO DO IT USING ONE STATE.

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // all states are initialized as a string bcoz the event object values outputs all data as strings even amount or dates.

  const titleChangeHandler = (e) => {
    // console.log(e.target.value); //to get value on every keystroke.
    // setEnteredTitle(e.target.value);
    //ABOVE IS FOR WHEN WE USE THREE SEPARATE STATES. FOR ONE STATE,

    setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    });
  };
  const amountChangeHandler = (e) => {
    // setEnteredAmount(e.target.value);
    //ABOVE IS FOR WHEN WE USE THREE SEPARATE STATES. FOR ONE STATE,

    setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    });
  };
  const dateChangeHandler = (e) => {
    // setEnteredDate(e.target.value);
    //ABOVE IS FOR WHEN WE USE THREE SEPARATE STATES. FOR ONE STATE,

    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
