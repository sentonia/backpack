import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import Select from "react-select";
import { sortingOptions } from "./../lib/constants";
import { useItemStore } from "./../stores/itemsStore";
import EmptyView from "./EmptyView";

export default function ItemList() {
  const items = useItemStore((state) => state.items);
  const removeItem = useItemStore((state) => state.removeItem);
  const toggleItem = useItemStore((state) => state.toggleItem);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === "packed") {
        return a.packed === b.packed ? 0 : a.packed ? 1 : -1;
      }

      if (sortBy === "unpacked") {
        return a.packed === b.packed ? 0 : a.packed ? -1 : 1;
      }
    });
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}
      {sortedItems.map((item, index) => (
        <Item
          key={index}
          item={item}
          onRemoveItem={removeItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onRemoveItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.text}
      </label>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};
