import Button from "./Button";

export default function ButtonGroup({
  onRemoveAllItems,
  onResetToInitial,
  onMarkAllAsComplete,
  onMarkAllAsIncomplete,
}) {
  const secondaryButtons = [
    { label: "Mark all as complete", onClickFn: onMarkAllAsComplete },
    { label: "Mark all as incomplete", onClickFn: onMarkAllAsIncomplete },
    { label: "Reset to initial", onClickFn: onResetToInitial },
    { label: "Remove all items", onClickFn: onRemoveAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ label, onClickFn }) => (
        <Button key={label} variant="secondary" label={label} onClick={onClickFn} />
      ))}
    </section>
  );
}
