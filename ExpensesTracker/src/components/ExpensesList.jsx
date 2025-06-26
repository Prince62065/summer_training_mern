import { ExpensesListItems } from "./ExpensesListItem";

const ExpensesList = ({ expenses , onDelete }) => {



  return expenses.length > 0 ? (
    <div className=" mt-4 ">
      <h2 className="text-2xl font-bold mb-2 mt-5 text-center text-white">Expenses List</h2>

      <div className="overflow-x-auto min-w-screen  px-5 h-80 ">
        <table className="w-full  border-collapse  rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-300 text-lg">
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Amount</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <ExpensesListItems expense={expense} index={index} key={index} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : null;
};

export default ExpensesList;
