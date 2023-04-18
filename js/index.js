const navContainer = document.querySelector(".nav-container320_360");
const callContainer = document.querySelector(".order-call-container320_360");
const feedbackContainer = document.querySelector(".feedback-container320_360");

// ----- OPEN/CLOSE NAVIGATION -----

document.addEventListener("click", (e) => {
  if (e.target.id === "menu-btn") {
    navContainer.style.display = "flex";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id === "nav-close-btn") {
    navContainer.style.display = "none";
  }
});

// ----- OPEN/CLOSE CALL ORDER -----

document.addEventListener("click", (e) => {
  if (e.target.id === "call-btn") {
    callContainer.style.display = "flex";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id === "modal-close-btn") {
    callContainer.style.display = "none";
  }
});

// ----- OPEN/CLOSE FEEDBACK -----

document.addEventListener("click", (e) => {
  if (e.target.id === "feedback-btn") {
    feedbackContainer.style.display = "flex";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id === "modal-close-btn") {
    feedbackContainer.style.display = "none";
  }
});
