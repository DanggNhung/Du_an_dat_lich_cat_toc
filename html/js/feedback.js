const btn = document.querySelector(".button");
const Feedback = document.querySelector(".Feedback-container");
btn.addEventListener("click", () => {
    Feedback.innerHTML =`<h1>Cảm ơn bạn đã phản hồi!</h1>`;
});