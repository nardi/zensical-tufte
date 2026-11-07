/*
 * The dropdown of the page title is a details element, whose native close on
 * an outside click never runs because the JavaScript of the built-in theme
 * handles the click first. The dropdown is closed by hand instead, and the
 * Escape key closes it as well.
 */
document$.subscribe(function () {
  var switcher = document.querySelector(".md-sites");
  if (switcher) {
    document.addEventListener("click", function (event) {
      if (switcher.open && !switcher.contains(event.target)) {
        switcher.open = false;
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && switcher.open) {
        switcher.open = false;
      }
    });
  }
});
