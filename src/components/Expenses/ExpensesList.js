import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  //   let emptyDataContent = <p>No data found :((</p>; //u can store JSX content in variables

  //ALTERNATIVE METHOD
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses .</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((ele) => (
        <ExpenseItem
          key={ele.id}
          title={ele.title}
          amount={ele.amount}
          date={ele.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
