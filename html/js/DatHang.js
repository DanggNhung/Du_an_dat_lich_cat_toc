let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalAmount = 0;

document.addEventListener('DOMContentLoaded', function () {
    updateCart();

    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutBox = document.getElementById('checkoutBox');
    const closeBtn = document.querySelector('.close');
    const successBox = document.getElementById('successBox');
    const closeSuccess = document.querySelector('.close-success');
    const checkoutForm = document.getElementById('checkoutForm');

    checkoutBtn.addEventListener('click', function () {
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống!");
        } else {
            checkoutBox.style.display = 'block';
        }
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
        localStorage.removeItem('cart'); // Xóa giỏ hàng sau khi đặt hàng thành công
        cart = [];
        updateCart();
    });

    closeSuccess.addEventListener('click', function () {
        successBox.style.display = 'none';
        cart = [];
        updateCart();
    });

    window.addEventListener('click', function (event) {
        if (event.target === successBox) {
            successBox.style.display = 'none';
        }
    });
});

function addToCart(productName, price) {
    const product = { name: productName, price: parseFloat(price) };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cartCount = cart.length;
    totalAmount = cart.reduce((sum, product) => sum + product.price, 0);

    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('total-amount').innerText = totalAmount.toLocaleString('vi-VN') + " VND";

    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ""; // Xóa danh sách cũ trước đó

    cart.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${product.name} - ${product.price.toLocaleString('vi-VN')} VND 
                              <button onclick="removeFromCart(${index})">Xóa</button>`;
        cartList.appendChild(listItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng
    localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật lại localStorage
    updateCart(); // Cập nhật lại giao diện sau khi xóa
}
