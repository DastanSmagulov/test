// clearDisplay

// clearLastElement

// Breath... text, after 10 seconds black div with white text good job!

// innerHtml, display: none

const h1 = document.getElementById("breathe");
const modal = document.getElementById("modal");

setTimeout(() => {
  h1.style.display = "none";
  modal.style.display = "block";
  document.body.style.backgroundColor = "grey";
  modal.style.backgroundColor = "white";
}, 3000);

//
