const btn = document.querySelector(".button");
buttons.forEach(button) => {
    button.addEventListener('click'), () => {
        // Remove 'selected' class from all buttons
        buttons.forEach(btn => btn.classList.remove('selected'));
        // Add 'selected' class to clicked button
        button.classList.add('selected');
    };
const Feedback = document.querySelector(".Feedback-container");
btn.addEventListener("click", () => {
    Feedback.innerHTML =`<h1>Cảm ơn bạn đã phản hồi!</h1>`;
});
