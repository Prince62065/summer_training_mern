import { useState } from "react";

const AddExpenses = ({addExpense}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !amount) {
      return alert("Please fill in both fields.");
    }
    else if(amount<0){
      return alert("Please enter amount greater than 0");
    }

    const newExpense={
        title:title,
        amount:parseFloat(amount),
        date:date
    }

    addExpense(newExpense);
    setTitle("");
    setAmount('');
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    
        
      <form onSubmit={handleSubmit} className="max-w-2xl w-full ">
        <div className="bg-white flex-col opacity-95   px-10 py-5 rounded-xl shadow-2xl shadow-gray-600">
          <div className="mb-5">
            <label htmlFor="title" className="block mb-2 text-lg ">
              Expense Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-md border w-full border-slate-700 px-4 py-2"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="amount" className="block mb-2 text-lg ">
              Expense Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="rounded-md border w-full border-slate-700 px-4 py-2"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="date" className="block mb-2 text-lg ">
              Expense Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-md border w-full border-slate-700 px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="rounded-md hover:bg-slate-900 cursor-pointer px-4 py-2 w-full font-semibold bg-slate-800 text-white text-lg"
          >
            Add Expense
          </button>
        </div>
      </form>
    
  );
};

export default AddExpenses;
