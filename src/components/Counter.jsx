import { useItemStore } from "./../stores/itemsStore";

export default function Counter() {
  const items = useItemStore((state) => state.items);
  const totalNumberOfItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed).length;

  return (
    <p className="counter">
      <b>{totalPackedItems}</b>/{totalNumberOfItems} items packed
    </p>
  );
}
