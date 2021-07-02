import React, { useState } from "react";
const Footer = ({ items, sort, clearCompleted, theme, isMobile }) => {
  const [marked, setMarked] = useState("");
  const checkMarked = (type) => {
    setMarked(type);
  };
  return (
    <div
      className={
        theme === "dark"
          ? items.length === 0
            ? "footer-container borders"
            : "footer-container"
          : items.length === 0
          ? "footer-container light borders"
          : "footer-container light"
      }
    >
      <p>{items.length} items left</p>
      {!isMobile && (
        <ul className={theme === "dark" ? "" : "light"}>
          <li
            onClick={() => {
              sort("all");
              checkMarked("all");
            }}
            className={marked === "all" ? "marked" : ""}
          >
            All
          </li>
          <li
            onClick={() => {
              sort("active");
              checkMarked("active");
            }}
            className={marked === "active" ? "marked" : ""}
          >
            Active
          </li>
          <li
            onClick={() => {
              sort("completed");
              checkMarked("completed");
            }}
            className={marked === "completed" ? "marked" : ""}
          >
            Completed
          </li>
        </ul>
      )}
      <p onClick={clearCompleted}>Clear Completed</p>
    </div>
  );
};

export default Footer;
