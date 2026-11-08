/*
 * The dropdown of the page title is a details element. Opening it animates
 * through the CSS transition, and closing it animates through a class that
 * the script applies while the element is still open, because the native
 * close hides the content at once. The dropdown also closes on an outside
 * click and on the Escape key. The listeners sit on the document and look
 * the dropdown up at event time, so they keep working when instant
 * navigation swaps the page content, and they do not depend on the theme
 * bundle having run first.
 */
(function () {
  var closing = false;

  function close(element) {
    if (closing || !element.open) {
      return;
    }
    closing = true;
    element.classList.add("md-sites--closing");
    setTimeout(function () {
      element.classList.remove("md-sites--closing");
      element.open = false;
      closing = false;
    }, 240);
  }

  document.addEventListener("click", function (event) {
    var element = document.querySelector(".md-sites");
    if (!element) {
      return;
    }
    var target = event.target instanceof Element ? event.target : null;
    var summary = target ? target.closest(".md-sites__summary") : null;
    if (summary && element.contains(summary)) {
      event.preventDefault();
      if (element.open) {
        close(element);
      } else {
        element.open = true;
      }
    } else if (element.open && target && !element.contains(target)) {
      close(element);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      var element = document.querySelector(".md-sites");
      if (element) {
        close(element);
      }
    }
  });
})();
