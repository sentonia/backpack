import { useItemStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemStore((state) => state.resetToInitial);
  const removeAllItems = useItemStore((state) => state.removeAllItems);

  const secondaryButtons = [
    { label: "Mark all as complete", onClickFn: markAllAsComplete },
    { label: "Mark all as incomplete", onClickFn: markAllAsIncomplete },
    { label: "Reset to initial", onClickFn: resetToInitial },
    { label: "Remove all items", onClickFn: removeAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ label, onClickFn }) => (
        <Button
          key={label}
          variant="secondary"
          label={label}
          onClick={onClickFn}
        />
      ))}
    </section>
  );
}
