import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./NewComponentExpenses.css";
import ExpensesFilter from "./ExpensesFilter";

const NewComponentExpenses = (props) => {
  const [shownDate, setShownDate] = useState("2019");

  const onSelectDateHandler = (selectedDate) => {
    setShownDate(selectedDate);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === parseInt(shownDate);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          currSelected={shownDate}
          selectDate={onSelectDateHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default NewComponentExpenses;
