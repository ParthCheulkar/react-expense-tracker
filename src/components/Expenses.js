import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import React from 'react';

export default function Expenses(props) {
  const items = props.data;
    return (
      <div className="expenses">
       { items.map((ele) =>
        <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />)}
    
      </div>
    );
}
