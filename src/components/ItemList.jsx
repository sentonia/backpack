import PropTypes from "prop-types";
import EmptyView from "./EmptyView";

export default function ItemList({ items, handleRemoveItem, handleToggleItem }) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.map((item, index) => (
        <Item key={index} item={item} onRemoveItem={handleRemoveItem} onToggleItem={handleToggleItem} />
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
        <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
        {item.text}
      </label>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}
