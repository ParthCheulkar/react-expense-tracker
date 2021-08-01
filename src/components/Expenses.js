import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import React from 'react';
import Card from './Card'
export default function Expenses(props) {
  const items = props.data;
    return (
      <Card className="expenses">
       { items.map((ele) =>
        <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />)}
    
      </Card>
    );
}
