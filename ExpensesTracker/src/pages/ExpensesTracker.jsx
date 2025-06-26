import { useState } from "react";
import AddExpenses from "../components/AddExpenses";
import ExpensesList from "../components/ExpensesList";
import Header from "../components/Header";

function ExpensesTracker() {
  const [expensesList, setExpensesList] = useState([]);

  const addExpense = (expense) => {
    setExpensesList((prevList) => [...prevList, expense]);
  };

  const onDelete=(index)=>{
    setExpensesList((prevList)=> prevList.filter((_, idx) => idx !== index));
  }

  return (
    <>
      <Header />
      <div className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen py-4 px-5 mt-10 flex flex-col justify-center items-center"  style={{
            backgroundImage: `url('https://images.pexels.com/photos/7267612/pexels-photo-7267612.jpeg')`,
        }}>
        <h1 className="text-2xl sm:text-4xl font-bold text-white text-center py-4">
          Expense Tracker
        </h1>
        <AddExpenses addExpense={addExpense} />
        <ExpensesList expenses={expensesList} onDelete={onDelete} />
      </div>
    </>
  );
}

export default ExpensesTracker;
