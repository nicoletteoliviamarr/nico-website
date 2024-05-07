document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

  const currentPathname = window.location.pathname;

  if (currentPathname == "/") {
    const indexLink = document.getElementById("index-link");
    indexLink.classList.add("active-star");
    return;
  }

  const navItems = document.querySelectorAll("nav ul li");

  navItems.forEach((item) => {
    if (item.querySelector("a").href.includes(currentPage)) {
      item.classList.add("active-star");
    }
  });
});
