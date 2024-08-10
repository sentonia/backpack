export default function Counter({ totalNumberOfItems, totalPackedItems }) {
  return (
    <p className="counter">
      <b>{totalPackedItems}</b>/{totalNumberOfItems} items packed
    </p>
  );
}
