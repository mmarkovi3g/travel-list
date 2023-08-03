/* ---------- STATS ---------- */

export default function Stats({
  numOfItems,
  numOfPackedItems,
  percentageOfPacked,
}) {
  if (!numOfItems)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🧳</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {percentageOfPacked === 100
          ? "You are ready to go. ✈️"
          : `You have ${numOfItems} items on your list, and you already packed
          ${numOfPackedItems} (${percentageOfPacked} %)}`}
      </em>
    </footer>
  );
}
