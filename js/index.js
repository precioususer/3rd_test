const navContainer = document.querySelector(".nav-container320_360");

document.addEventListener("click", (e) => {
  if (e.target.closest(".burger").className === "burger") {
    navContainer.style.display = "flex";
  } else;
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".nav-close-btn").className === "nav-close-btn") {
    navContainer.style.display = "none";
  } else;
});
