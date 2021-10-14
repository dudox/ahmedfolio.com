function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
  themeName === "theme-dark" ? setDarkTheme() : setLightMode();
}

function setLightMode() {
  document.body.classList.add("theme-light");
  unsetClassName(document.getElementsByClassName("main"), "theme-dark");
}

function setDarkTheme() {
  document.body.classList.remove("theme-light");
  setClassName(document.getElementsByClassName("main"), "theme-dark");
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

function setClassName(rows, classToAdd) {
  for (var i = 0; i < rows.length; i++) {
    rows[i].classList.add(classToAdd);
  }
}

function unsetClassName(rows, classToAdd) {
  for (var i = 0; i < rows.length; i++) {
    rows[i].classList.remove(classToAdd);
  }
}

module.exports = {
  setTheme,
  keepTheme,
};
