// script.js

// Update current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Form validation logic
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    messageBox.textContent = "All fields are required.";
    messageBox.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    messageBox.textContent = "Invalid email address.";
    messageBox.style.color = "red";
    return;
  }

  messageBox.textContent = "Thanks! Your message has been sent.";
  messageBox.style.color = "green";
  form.reset();
});
