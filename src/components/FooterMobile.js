import React, { useState } from "react";

const FooterMobile = ({ theme, sort, items }) => {
  const [marked, setMarked] = useState("");
  const checkMarked = (type) => {
    setMarked(type);
  };
  return (
    <div
      className={
        theme === "dark"
          ? "footer-container mobile"
          : "footer-container light mobile"
      }
    >
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
    </div>
  );
};

export default FooterMobile;
