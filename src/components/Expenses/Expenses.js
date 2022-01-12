import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import React, {useState} from 'react';
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter';
export default function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2020");
  const items = props.data;
  const saveYearHandler = (selectedYear) => {
    // console.log("m in expense js");
    // console.log(selectedYear);
    setYearSelected(selectedYear);
  }
  const fiteredList = items.filter((ele) => ele.date.getFullYear().toString() === yearSelected);

  let emptyDataContent = <p>No data found :((</p> ; //u can store JSX content in variables

  //ALTERNATIVE METHOD
  // if(fiteredList.length > 0){
  //   emptyDataContent = fiteredList.map((ele) =>
  //   <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />);
  // }
    return (
      <Card className="expenses">
        <ExpensesFilter selected = {yearSelected} onSelectYear = {saveYearHandler}/>
       {fiteredList.length === 0 &&  emptyDataContent}  
       {fiteredList.length > 0 && fiteredList.map((ele) =>
        <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />)}
    
      </Card>
    );
}

//&& is a JS trick wherein if the first part is true, it returns the second part of the expression.

