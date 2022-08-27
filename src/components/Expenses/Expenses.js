import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  let expenses = props.expenses;
  const [filter, setFilter] = useState({year: '2020'});

  const yearFilterChangeHandler = (filterValue) => {
    setFilter({
      ...filter,
      year: filterValue
    });
    console.log(filter);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter yearValue={filter.year} onChangeFilter={yearFilterChangeHandler}></ExpensesFilter>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.title}
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
