//in this excercise i will write the comments in english ***

import { useState } from "react";

//initial dummy list for rendering
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Documents", quantity: 22, packed: true },
  { id: 4, description: "T-shirts", quantity: 6, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]); //moved state up from FORM component so it could render later

  //function for adding new items
  //we cant mutate existing array with push etc. so we need to destructure existing items and add new inputed item
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

/*
Jonas sugests to write all the components in one file for now so it wouldnt me too confusing
To add emoji on Windows i used 'Win + .' shortcut
*/

function Logo() {
  return <h1>🌴 Far Away 🥥</h1>;
}

//here we used Array.from to generate 20 numbers in a list of options. Then we mapped that values to option element
function Form({ onHandleAddItems }) {
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
      key: Date.now(),
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

function PackingList({ items }) {
  //destructuring items
  return (
    <div className="list">
      <ul>
        {items.map(
          (
            item //accepting props from APP
          ) => (
            <Item item={item} key={item.id} />
          )
        )}
      </ul>
    </div>
  );
}

//single line ternary operator to add styling to packed items
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity + " "}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
