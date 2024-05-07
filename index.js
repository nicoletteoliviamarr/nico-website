document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

  const navItems = document.querySelectorAll("nav ul li");

  navItems.forEach((item) => {
    if (item.querySelector("a").href.includes(currentPage)) {
      item.classList.add("active-star");
    }
  });
});
