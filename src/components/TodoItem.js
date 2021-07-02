import React, { useState } from "react";

import img from "../images/icon-cross.svg";
import checkmark from "../images/icon-check.svg";

const TodoItem = ({ item, onDelete, onClick, theme, isMobile }) => {
  return (
    <div className={theme === "dark" ? "item" : " item light"}>
      <div
        onClick={() => {
          onClick(item.id);
        }}
        className={
          item.checked
            ? theme === "dark"
              ? "circle checked"
              : " circle light checked"
            : theme === "dark"
            ? "circle "
            : " circle light"
        }
      >
        {item.checked && <img src={checkmark}></img>}
        <div
          className={
            item.checked
              ? theme === "dark"
                ? "circle2 displaynone"
                : "circle2 light displaynone"
              : theme === "dark"
              ? "circle2 "
              : "circle2 light"
          }
        ></div>
      </div>
      <p
        onClick={() => {
          onClick(item.id);
        }}
        className={
          theme === "dark"
            ? item.checked
              ? "crossed"
              : " "
            : item.checked
            ? "light crossed"
            : "light"
        }
      >
        {item.name}
      </p>
      <img
        className={"cross"}
        onClick={() => {
          onDelete(item.id);
        }}
        src={img}
        alt=""
      />
    </div>
  );
};

export default TodoItem;
