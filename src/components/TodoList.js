import React, { useState } from "react";

import TodoItem from "./TodoItem";

const TodoList = ({ items, onDelete, onClick, sort, theme, isMobile }) => {
  const [pClicked, setPClicked] = useState(false);
  let filteredList = [];
  if (sort == "all") {
    filteredList = items;
  } else if (sort == "active") {
    filteredList = items.filter((item) => !item.checked);
  } else if (sort == "completed") {
    filteredList = items.filter((item) => item.checked);
  }

  return (
    <div className="list-container">
      {filteredList.map((item) => {
        console.log(item.id);
        return (
          <TodoItem
            theme={theme}
            item={item}
            key={item.id}
            onDelete={onDelete}
            onClick={onClick}
            pClicked={pClicked}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
