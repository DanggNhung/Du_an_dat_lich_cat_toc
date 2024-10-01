let cartCount = 0;
let totalAmount = 0;

function addToCart(price) {
    cartCount++;
    totalAmount += price;
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('total-amount').innerText = totalAmount;
}

function checkout() {
    if (totalAmount > 0) {
        alert(`Tổng tiền của bạn là $${totalAmount}. Chuyển tới trang thanh toán...`);
        // Đối với thanh toán thực tế, bạn có thể chuyển hướng người dùng đến cổng thanh toán PayPal.
        window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL_EMAIL&amount=${totalAmount}&currency_code=USD`;
    } else {
        alert("Giỏ hàng của bạn đang trống!");
    }
}
