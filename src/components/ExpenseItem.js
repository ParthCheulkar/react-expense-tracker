import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"; //importing styles
import Card from "./Card"; //importing this custom made div to avoid duplication of styles.
function ExpenseItem(props) {
  //props are like proeprties or parameters coz react only allows one parameter in a fn cmpnt
  // defining our custom component
  // using a different cmpnt inside our cmpnt
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem; //exporting our custom component

// write 'className' insteda of class
