import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import ListTitle from "./components/ListTitle";

const data = [
  {
    id: "el1",
    title: "NextJS",
    checked: false,
  },
  {
    id: "el2",
    title: "ReactJs",
    checked: false,
  },
  {
    id: "el3",
    title: "JS",
    checked: false,
  },
];

function App() {
  const [items, setItems] = useState(data);
  const [newItems, setNewItems] = useState([]);

  function addItemsHandler(item) {
    const uppData = [];
    items.map((el) => {
      el.id === item.id
        ? uppData.push({ ...el, checked: true })
        : uppData.push(el);
    });
    setItems(uppData);
    const newItemsValue = [...newItems, item];
    setNewItems(newItemsValue);
  }

  return (
    <div className="App">
      {items.map((item) => {
        return (
          <Item
            text={item.title}
            key={item.id}
            checked={item.checked}
            onClick={() => addItemsHandler(item)}
          />
        );
      })}
      <ListTitle getItems={newItems} />
    </div>
  );
}

export default App;
