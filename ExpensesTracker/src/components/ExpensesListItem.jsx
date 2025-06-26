export const ExpensesListItems = ({ expense, index, onDelete }) => {
  return (
    <tr key={index} className="text-center text-lg bg-indigo-50">
      <td className="border border-gray-300 px-4 py-2 ">{expense.title}</td>
      <td className="border border-gray-300 px-4 py-2">{expense.amount}</td>
      <td className="border border-gray-300 px-4 py-2">
        {new Date(expense.date).toLocaleDateString()}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        <button className="bg-red-700 text-white px-4 py-1 rounded-lg" onClick={()=>{onDelete(index);}}>
          Delete
        </button>
      </td>
    </tr>
  );
};
