import React from "react";
import './ExpenseDate.css';
//creating a custom cmpnt for Date
export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }); //get month in word format
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // get 2-digit date nos
  const year = props.date.getFullYear(); //get year eg. 2014
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
