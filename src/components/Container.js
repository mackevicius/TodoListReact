import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import imgDark from "../images/icon-sun.svg";
import imgLight from "../images/icon-moon.svg";
import Footer from "./Footer";

import FooterMobile from "./FooterMobile";

const Container = ({ onClick, theme, isMobile }) => {
  const [items, setItems] = useLocalStorage("items", []);
  const [text, setText] = useState("");
  const [id, setId] = useLocalStorage("id", 7);
  const [sort, setSort] = useState("all");

  // Hook
  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage

        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }

  const addItem = (e) => {
    e.preventDefault();
    if (text !== "") {
      setId(id + 1);
      setItems([...items, { name: text, checked: false, id: id }]);
      setText("");
    }
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const checkItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const clearCompleted = () => {
    const newItems = items.filter((item) => !item.checked);
    setItems(newItems);
  };
  const sortItems = (type) => {
    setSort(type);
  };

  return (
    <div className="container">
      <div className="ontopoflist">
        <h1>TODO</h1>
        <img
          onClick={onClick}
          src={theme == "dark" ? imgDark : imgLight}
          alt=""
        />
      </div>
      <form
        action="submit"
        onSubmit={addItem}
        className={theme === "dark" ? "" : "light"}
      >
        <div className={theme === "dark" ? "circle" : "circle light"}>
          <div className={theme === "dark" ? "circle2" : "circle2 light"}></div>
        </div>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          className={theme === "dark" ? "" : "light"}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </form>
      <TodoList
        theme={theme}
        items={items}
        onDelete={deleteItem}
        onClick={checkItem}
        sort={sort}
        isMobile={isMobile}
      />
      <Footer
        sort={sortItems}
        clearCompleted={clearCompleted}
        items={items}
        theme={theme}
        isMobile={isMobile}
      />
      {isMobile && (
        <FooterMobile theme={theme} items={items} sort={sortItems} />
      )}
    </div>
  );
};

export default Container;
