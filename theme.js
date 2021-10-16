const themes = document.getElementsByClassName("theme");
for (let i = 0; i < themes.length; i++) {
  themes[i].addEventListener("click", (el) => {
    var colorTheme = el.target.id;
    document.documentElement.setAttribute("data-theme", colorTheme);

    for (let i = 0; i < themes.length; i++) {
      themes[i].style.setProperty("background-color", "inherit");
    }

    var btn = document.getElementById(colorTheme);
    btn.style.setProperty("background-color", "var(--bg)");
  });
}
