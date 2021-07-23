import ExpenseItem from './components/ExpenseItem'; //importing our custom component.

function App() {
  // functional Component App
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem /> 
    </div>
    // this is JSX, a special syntax provided by React.
  );
}

export default App; 
// exporting our App
