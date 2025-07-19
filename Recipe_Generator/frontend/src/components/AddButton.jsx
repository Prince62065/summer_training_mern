import { useState } from "react";

export default function AddButton({ addQuery }) {
    const [inputs, setInputs] = useState([""]);

    const handleAddInput = () => {
        setInputs([...inputs, ""]);
    };

    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    };

    const handleRemoveInput = (index) => {
        const newInputs = inputs.filter((_, i) => i !== index);
        setInputs(newInputs);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the full list to parent
        addQuery(inputs);
    };

    return (
        <form onSubmit={handleSubmit}>
            {inputs.map((input, index) => (
                <div className="py-2 flex gap-3 items-center" key={index}>
                    <input
                        type="text"
                        className="w-full rounded-md px-5 py-2 border font-bold  border-slate-600"
                        placeholder="Enter the ingredient"
                        value={input}
                        onChange={(e) => handleInputChange(index, e)}
                    />
                    <button
                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                        onClick={() => handleRemoveInput(index)}
                        disabled={inputs.length === 1}
                        type="button"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button
                type="button"
                className="border bg-slate-800 text-white px-5 py-2 rounded-md font-semibold hover:bg-slate-900 cursor-pointer"
                onClick={handleAddInput}
            >
                Add more
            </button>

            <button
                type="submit"
                className="md:ml-4 ml-2 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
            >
                Search Recipe
            </button>
        </form>
    );
}
