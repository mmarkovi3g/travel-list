//in this excercise i will write the comments in english ***

import { useState } from "react";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Logo from "./components/Logo";

/* ---------- APP ---------- */

export default function App() {
  const [items, setItems] = useState([]); //moved state up from FORM component so it could render later

  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed === true).length;
  const percentageOfPacked = Math.trunc((numOfPackedItems / numOfItems) * 100);

  //function for adding new items
  //we cant mutate existing array with push etc. so we need to destructure existing items and add new inputed item
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  //deleting item - takes filtered items and returns new array without item we click on
  //handleDeleteItem needs to be passed down as prop first to <PackingList> then to <Item> as props
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //function on packed (striketrough if packed)
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  //function clear the list
  function handleClear(items) {
    const confirmed = window.confirm(
      "Are you sure you want delete all items? "
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClear}
      />
      <Stats
        numOfItems={numOfItems}
        numOfPackedItems={numOfPackedItems}
        percentageOfPacked={percentageOfPacked}
      />
    </div>
  );
}

/*
To add emoji on Windows i used 'Win + .' shortcut
*/
