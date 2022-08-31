import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  let expenses = props.expenses;
  const [filter, setFilter] = useState({year: '2021'});
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filter.year);
  
  const yearFilterChangeHandler = (filterValue) => {
    setFilter({
      ...filter,
      year: filterValue
    });
  };

  return (
    <Card className="expenses">
      <ExpensesFilter yearValue={filter.year} onChangeFilter={yearFilterChangeHandler}></ExpensesFilter>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;
