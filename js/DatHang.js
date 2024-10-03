let cartCount = 0;
let totalAmount = 0;

function addToCart(price) {
    cartCount++;
    totalAmount += price;
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('total-amount').innerText = totalAmount;
}

document.addEventListener('DOMContentLoaded', function () {
    let totalAmount = 100; 

    if (totalAmount > 0) {
        const checkoutBtn = document.getElementById('checkoutBtn');
        const checkoutBox = document.getElementById('checkoutBox');
        const closeBtn = document.querySelector('.close');
        const successBox = document.getElementById('successBox');
        const closeSuccess = document.querySelector('.close-success');
        const checkoutForm = document.getElementById('checkoutForm');

        checkoutBtn.addEventListener('click', function () {
            checkoutBox.style.display = 'block';
        });

        closeBtn.addEventListener('click', function () {
            checkoutBox.style.display = 'none';
        });
        window.addEventListener('click', function (event) {
            if (event.target === checkoutBox) {
                checkoutBox.style.display = 'none';
            }
        });
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
            checkoutBox.style.display = 'none';
            successBox.style.display = 'block';
        });

        closeSuccess.addEventListener('click', function () {
            successBox.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target === successBox) {
                successBox.style.display = 'none';
            }
        });
    } else {
        alert("Giỏ hàng của bạn đang trống!");
    }
});
