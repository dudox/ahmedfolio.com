import React, { useEffect, useState } from "react";
import { setTheme } from "../../utils/themes";
import FeatherIcon from "feather-icons-react";

const ToggleThemeMode = () => {
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);
  return (
    <div className="container--toggle">
      {togClass === "light" ? (
        <FeatherIcon icon={"moon"} size={30} onClick={handleOnClick} checked />
      ) : (
        <FeatherIcon icon={"sun"} size={30} onClick={handleOnClick}  />

      )}
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
};

export default ToggleThemeMode;
