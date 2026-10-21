/* Mobile navigation behavior only.
   The menu is a <details> element, so it opens and closes without this file.
   The script closes it after a link is chosen, after a click outside,
   and when Escape is pressed, so the open menu does not sit on top of the page. */
(function () {
  var menu = document.querySelector(".nav-menu");
  if (!menu) return;

  var summary = menu.querySelector("summary");

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.removeAttribute("open");
    });
  });

  document.addEventListener("click", function (event) {
    if (!menu.open || menu.contains(event.target)) return;
    menu.removeAttribute("open");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape" || !menu.open) return;
    menu.removeAttribute("open");
    if (summary) summary.focus();
  });
})();
