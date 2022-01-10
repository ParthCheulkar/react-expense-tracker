import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import React, {useState} from 'react';
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter';
export default function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2020");
  const items = props.data;
  const saveYearHandler = (selectedYear) => {
    console.log("m in expense js");
    console.log(selectedYear);
    setYearSelected(selectedYear);
  }
    return (
      <Card className="expenses">
        <ExpensesFilter selected = {yearSelected} onSelectYear = {saveYearHandler}/>
       { items.map((ele) =>
        <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />)}
    
      </Card>
    );
}
