import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
export default function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2020");
  const items = props.data;
  const saveYearHandler = (selectedYear) => {
    // console.log("m in expense js");
    // console.log(selectedYear);
    setYearSelected(selectedYear);
  };
  const filteredList = items.filter(
    (ele) => ele.date.getFullYear().toString() === yearSelected
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearSelected} onSelectYear={saveYearHandler} />
      <ExpensesChart expenses={filteredList} />
      <ExpensesList items={filteredList} />
    </Card>
  );
}

//&& is a JS trick wherein if the first part is true, it returns the second part of the expression.
