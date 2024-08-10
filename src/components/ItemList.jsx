import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import Select from "react-select";
import EmptyView from "./EmptyView";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList({
  items,
  handleRemoveItem,
  handleToggleItem,
}) {
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
          onRemoveItem={handleRemoveItem}
          onToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

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
