import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  let expenses = props.expenses;
  const [filter, setFilter] = useState({year: '2021'});

  const yearFilterChangeHandler = (filterValue) => {
    setFilter({
      ...filter,
      year: filterValue
    });
  };

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filter.year);

  return (
    <Card className="expenses">
      <ExpensesFilter yearValue={filter.year} onChangeFilter={yearFilterChangeHandler}></ExpensesFilter>
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.amount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expenses;
