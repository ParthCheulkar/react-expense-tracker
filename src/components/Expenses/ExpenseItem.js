import {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"; //importing styles
import Card from "../UI/Card"; //importing this custom made div to avoid duplication of styles.
function ExpenseItem(props) {
  //props are like properties or parameters coz react only allows one parameter in a fn cmpnt
  useState();
  let title = props.title;

  const clickHandler = () =>{
    console.log("Clickedddddd!!!!");
  }
  // defining our custom component
  // using a different cmpnt inside our cmpnt
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        onClick={clickHandler}
      >
        Change title
      </button>
    </Card>
  );
}

export default ExpenseItem; //exporting our custom component

// write 'className' instead of class

//react evals jsx code, it calls cmpnt functions, its like a fn call  when it encounters jsx and keeps on calling the compnts within the fn (JSX) , it goes thru jsx part of every cmnpnt and then it evaluates all the results and renders it on screen (like a tree)