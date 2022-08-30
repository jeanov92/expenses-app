import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  let expenses = props.expenses;
  let expenseContent = <p>No content!</p>;
  const [filter, setFilter] = useState({year: '2021'});
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filter.year);
  
  const yearFilterChangeHandler = (filterValue) => {
    setFilter({
      ...filter,
      year: filterValue
    });
  };

  if(filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.amount}
        ></ExpenseItem>
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter yearValue={filter.year} onChangeFilter={yearFilterChangeHandler}></ExpensesFilter>
      {expenseContent}
    </Card>
  );
}

export default Expenses;
