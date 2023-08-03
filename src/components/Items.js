/* ---------- ITEM ---------- */

import { useState } from "react";

//single line ternary operator to add styling to packed items
//to use onDelete item we need callback function with argument (item.id)
export default function Item({ item, onDeleteItem, onToggleItems }) {
  const [packed, setPacked] = useState(false);

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItems(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity + " "}
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
