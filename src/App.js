import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import Container from "./components/Container";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    if (theme == "dark") setTheme("light");
    else setTheme("dark");
  };
  if (theme === "dark")
    document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
  else document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
  return (
    <div className={theme === "dark" ? "main" : "main light"}>
      {!isMobile && <Header theme={theme} isMobile={isMobile} />}
      {isMobile && <HeaderMobile theme={theme} isMobile={isMobile} />}
      <Container onClick={changeTheme} theme={theme} isMobile={isMobile} />
    </div>
  );
}

export default App;
