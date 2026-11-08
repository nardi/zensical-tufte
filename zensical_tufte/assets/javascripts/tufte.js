/*
 * The dropdown of the page title is a details element. Opening it animates
 * through the CSS transition, and closing it animates through a class that
 * the script applies while the element is still open, because the native
 * close hides the content at once. The dropdown also closes on an outside
 * click and on the Escape key.
 */
document$.subscribe(function () {
  var switcher = document.querySelector(".md-sites");
  if (!switcher) {
    return;
  }
  var closing = false;

  function close() {
    if (closing || !switcher.open) {
      return;
    }
    closing = true;
    switcher.classList.add("md-sites--closing");
    setTimeout(function () {
      switcher.classList.remove("md-sites--closing");
      switcher.open = false;
      closing = false;
    }, 240);
  }

  switcher
    .querySelector(".md-sites__summary")
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (switcher.open) {
        close();
      } else {
        switcher.open = true;
      }
    });
  document.addEventListener("click", function (event) {
    if (switcher.open && !switcher.contains(event.target)) {
      close();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      close();
    }
  });
});
