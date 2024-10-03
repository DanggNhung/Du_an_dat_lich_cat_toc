const btn = document.querySelector(".button");
const Feedback = document.querySelector(".Feedback-container");
btn.addEventListener("click", () => {
    Feedback.innerHTML =`<h1>Thank you for your feedback</h1>`;
});