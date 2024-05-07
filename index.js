document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

  const currentPathname = window.location.pathname;

  const navItems = document.querySelectorAll("nav ul li");

  navItems.forEach((item) => {
    if (currentPathname == "/") {
      if (item.querySelector("a").href.includes("/")) {
        item.classList.add("active-star");
      }
    } else {
      if (item.querySelector("a").href.includes(currentPage)) {
        item.classList.add("active-star");
      }
    }
  });
});
