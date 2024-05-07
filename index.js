document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

  const navItems = document.querySelectorAll("nav ul li");

  navItems.forEach((item) => {
    if (currentPage == "/" && item.querySelector("a").href.includes("index")) {
    } else if (item.querySelector("a").href.includes(currentPage)) {
      item.classList.add("active-star");
    }
  });
});
