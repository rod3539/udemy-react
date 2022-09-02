import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.expenses.map((expense) => (
        <ExpenseItem 
          title={expense.title} 
          amount={expense.amout} 
          date={expense.date} 
        />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;