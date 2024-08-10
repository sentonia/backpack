import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        onRemoveAllItems={handleRemoveAllItems}
        onResetToInitial={handleResetToInitial}
        onMarkAllAsComplete={handleMarkAllAsComplete}
        onMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      />
    </div>
  );
}
