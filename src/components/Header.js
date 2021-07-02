import React, { useState, useEffect } from "react";

const Header = ({ theme }) => {
  return (
    <div className={theme === "dark" ? "background" : "background light"}></div>
  );
};

export default Header;
