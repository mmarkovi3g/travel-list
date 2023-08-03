/* ---------- FORM ---------- */
import { useState } from "react";
//here we used Array.from to generate 20 numbers in a list of options. Then we mapped that values to option element
export default function Form({ onHandleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    //prevent default form behaviour (HTTPS request)
    event.preventDefault();

    if (!description) return; // if whe have not entered description function will retun and not create object New item
    //creating constant for generating object from input form

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    //calling handleAddItems on submit form to save arrays we inputed
    onHandleAddItems(newItem);

    // return form to inital state after submission
    setDescription("");
    setQuantity(1);
  }

  // on select element we convert target value to number with Number(event.target.value)
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🧳</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button type="submit">ADD</button>
    </form>
  );
}
