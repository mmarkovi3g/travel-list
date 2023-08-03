/* ---------- PACKING LIST ---------- */
import { useState } from "react";
import Item from "./Items";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  onClearList,
}) {
  //destructuring items

  const [sortBy, setSortBy] = useState("input");
  //instead of 'items' we will render sortedItems based on sorting change (derived state)
  let sortedItems;

  //sorting by input - default sort - items are added to array one by one in adding order
  if (sortBy === "input") sortedItems = items;

  //sorting by item.description
  if (sortBy === "description")
    sortedItems = items
      .slice() //we first slice the array to create shallow copy of it (so we dont mutate original array with sort)
      .sort((a, b) => a.description.localeCompare(b.description)); //localeCompare returns -1,0,1 values that are used in sort to sort items acording to their description

  //sorting by item.packed
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed)); //Number converts boolean to 0 or 1 so the sorting is done easily here

  return (
    <div className="list">
      <ul>
        {sortedItems.map(
          (
            item //accepting props from APP
          ) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              key={item.id}
              onToggleItems={onToggleItems}
            />
          )
        )}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
