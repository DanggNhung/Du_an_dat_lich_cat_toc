// Truy vấn tất cả các nút biểu tượng cảm xúc có class .btn trong hộp biểu tượng cảm xúc
const emojiButtons = document.querySelectorAll(".emoji-box .btn");
let selectedEmoji = null; // Biến để lưu trữ emoji được chọn

// Thêm sự kiện click cho mỗi nút biểu tượng cảm xúc
emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Nếu nút đã được chọn, không làm gì cả
        if (selectedEmoji === button) {
            return;
        }
        // Loại bỏ lớp 'selected' và 'large' khỏi tất cả các nút khác
        emojiButtons.forEach(btn => {
            btn.classList.remove('selected');
            btn.classList.remove('large'); // Giả sử 'large' là lớp CSS để phóng to emoji
        });
        // Thêm lớp 'selected' và 'large' vào nút đã nhấn
        button.classList.add('selected');
        button.classList.add('large'); // Thêm lớp phóng to cho emoji đã chọn
        // Cập nhật biến selectedEmoji
        selectedEmoji = button;
    });
});

// Truy vấn nút "Gửi" phản hồi có class .button
const submitButton = document.querySelector(".button");
// Truy vấn phần container phản hồi để hiển thị thông báo cảm ơn
const feedbackContainer = document.querySelector(".Feedback-container");

// Thêm sự kiện click cho nút "Gửi"
submitButton.addEventListener("click", () => {
    // Thay đổi nội dung của Feedback-container để hiển thị thông báo cảm ơn
    feedbackContainer.innerHTML = `<h1>Cảm ơn bạn đã phản hồi!</h1>`;

    // Sau 2 giây, chuyển hướng về trang index.html
    setTimeout(() => {
        window.location.href = "./index.html";
    }, 2000);
});
