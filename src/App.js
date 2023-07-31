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
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
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
function Form() {
  //prevent default form behaviour (HTTPS request)
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🧳</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."></input>
      <button type="submit">ADD</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
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
