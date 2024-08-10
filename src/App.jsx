import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { defaultItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(defaultItems);
  const totalNumberOfItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed).length;

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      text: newItemText,
      packed: false,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(defaultItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header totalNumberOfItems={totalNumberOfItems} totalPackedItems={totalPackedItems} />
        <ItemList items={items} handleRemoveItem={handleRemoveItem} handleToggleItem={handleToggleItem} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;

