import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim the input text and return if it's empty
    if (!itemText.trim()) {
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
    // Focus the input field after adding an item
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        placeholder="e.g., toothbrush"
        autoFocus={true}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button label="Add to list" />
    </form>
  );
}
