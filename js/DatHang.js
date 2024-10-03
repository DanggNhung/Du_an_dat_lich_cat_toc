let cartCount = 0;
let totalAmount = 0;

function addToCart(price) {
    cartCount++;
    totalAmount += price;
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('total-amount').innerText = totalAmount;
}

document.addEventListener('DOMContentLoaded', function () {
    let totalAmount = 100; // Giả sử đã tính được tổng tiền

    if (totalAmount > 0) {
        const checkoutBtn = document.getElementById('checkoutBtn');
        const checkoutBox = document.getElementById('checkoutBox');
        const closeBtn = document.querySelector('.close');
        const successBox = document.getElementById('successBox');
        const closeSuccess = document.querySelector('.close-success');
        const checkoutForm = document.getElementById('checkoutForm');

        // Khi nhấn vào nút "Thanh toán", hiển thị hộp thoại
        checkoutBtn.addEventListener('click', function () {
            checkoutBox.style.display = 'block';
        });

        // Khi nhấn vào nút "x" để đóng hộp thoại
        closeBtn.addEventListener('click', function () {
            checkoutBox.style.display = 'none';
        });

        // Khi nhấn vào bất kỳ đâu bên ngoài hộp thoại, hộp thoại sẽ đóng
        window.addEventListener('click', function (event) {
            if (event.target === checkoutBox) {
                checkoutBox.style.display = 'none';
            }
        });

        // Khi nhấn "Đồng ý", kiểm tra dữ liệu và hiển thị thông báo
        checkoutForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();

            if (name === "" || phone === "" || address === "") {
                alert("Vui lòng điền đầy đủ thông tin.");
                return;
            }

            if (!/^\d{10}$/.test(phone)) {
                alert("Số điện thoại không hợp lệ. Phải có 10 chữ số.");
                return;
            }

            // Hiển thị hộp thông báo thành công
            checkoutBox.style.display = 'none';
            successBox.style.display = 'block';
        });

        // Khi nhấn vào nút "x" để đóng hộp thông báo thành công
        closeSuccess.addEventListener('click', function () {
            successBox.style.display = 'none';
        });

        // Đóng hộp thông báo thành công khi nhấn ra ngoài
        window.addEventListener('click', function (event) {
            if (event.target === successBox) {
                successBox.style.display = 'none';
            }
        });
    } else {
        alert("Giỏ hàng của bạn đang trống!");
    }
});
