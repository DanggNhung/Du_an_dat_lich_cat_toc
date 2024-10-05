document.addEventListener("DOMContentLoaded", function() {
    const bookingsTableBody = document.querySelector("#bookingsTable tbody");

    // Lấy danh sách lịch hẹn từ localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Kiểm tra xem có lịch hẹn nào không
    if (bookings.length === 0) {
        bookingsTableBody.innerHTML = "<tr><td colspan='6'>Chưa có lịch hẹn nào được đặt.</td></tr>";
    } else {
        // Sắp xếp các lịch hẹn theo ngày giờ, lịch hẹn gần nhất lên đầu
        bookings.sort((a, b) => {
            const dateTimeA = new Date(a.date + ' ' + a.time);
            const dateTimeB = new Date(b.date + ' ' + b.time);
            return dateTimeA - dateTimeB; // Sắp xếp theo thứ tự tăng dần
        }).reverse(); // Đảo ngược để lịch gần nhất lên đầu

        // Hiển thị từng lịch hẹn
        bookings.forEach(booking => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${booking.userName}</td>
                <td>${booking.email}</td>
                <td>${booking.date}</td>
                <td>${booking.time}</td>
                <td>${booking.service}</td>
                <td>${booking.note || "Không có ghi chú"}</td>
            `;
            bookingsTableBody.appendChild(row);
        });
    }
});

