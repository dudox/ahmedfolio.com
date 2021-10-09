function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  // document.documentElement.className = themeName;
  themeName === "theme-dark"
    ? setDarkTheme()
    : setLightMode()
}

function setLightMode(){
  document.body.classList.add("theme-light");
  document.getElementById("app_main").classList.remove('theme-dark');

}

function setDarkTheme() {
  document.body.classList.remove("theme-light");
  document.getElementById("app_main").classList.add("theme-dark");
}

function keepTheme() {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTheme("theme-light");
    }
  } else {
    setTheme("theme-dark");
  }
}

module.exports = {
  setTheme,
  keepTheme,
};
