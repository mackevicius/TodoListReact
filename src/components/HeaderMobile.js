import React, { useState, useEffect } from "react";

const Header = ({ theme }) => {
  return (
    <div
      className={
        theme === "dark" ? "background-mobile" : "background-mobile light"
      }
    ></div>
  );
};

export default Header;
