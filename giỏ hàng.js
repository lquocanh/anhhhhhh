document.querySelector('.submit-btn').addEventListener('click', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const namePattern = /^[a-z]+$/;
    const emailPattern =  /^[^\s@]+@[^\s@]+\.com$/;;
    const phonePattern = /^[0-9]{10,11}$/;

    if (!namePattern.test(name)) {
        alert('Vui lòng nhập thông tin hợp lệ.');
        event.preventDefault();
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        event.preventDefault();
        return;
    }

    if (!phonePattern.test(phone)) {
        alert('Vui lòng nhập số điện thoại hợp lệ (10-11 chữ số).');
        event.preventDefault();
        return;
    }
    
    const paymentMethod = document.querySelector('input[name="payment"]:checked').id;

    if (paymentMethod === 'chuyen-khoan') {
        // Tạo mã đơn hàng ngẫu nhiên
        const orderId = 'DH' + Math.floor(Math.random() * 100000000);

        // Cập nhật mã đơn hàng và hiển thị phần tử
        document.getElementById('order-id').textContent = orderId;
        document.getElementById('order-details').style.display = 'block';

        // Ngăn form gửi đi nếu bạn muốn xử lý thông tin thêm
        event.preventDefault();
    } else {
        alert('Đặt hàng thành công!');
    }
});

// Đóng phần thông tin hóa đơn khi nhấp ra ngoài
document.addEventListener('click', function(event) {
    const orderDetails = document.getElementById('order-details');
    const submitBtn = document.querySelector('.submit-btn');

    // Kiểm tra nếu nhấp vào phần thông tin hóa đơn hoặc nút đặt hàng
    if (!orderDetails.contains(event.target) && !submitBtn.contains(event.target)) {
        orderDetails.style.display = 'none';
    }
});



    // Lấy dữ liệu từ Local Storage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

    function loadCart() {
        var cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = ''; // Clear previous items

        cart.forEach(function(item, index) {
            var cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            cartItem.innerHTML = `
                <div><strong>Sản phẩm:</strong> ${item.name}</div>
                <div><strong>Đơn giá:</strong> ${item.price.toLocaleString('vi-VN')} VND</div>
                <div><strong>Số lượng:</strong> ${item.quantity}</div>
                <div><strong>Tổng:</strong> ${item.itemTotal.toLocaleString('vi-VN')} VND</div>
            `;
            cartItems.appendChild(cartItem);
        });

        document.getElementById('total-price').innerText = totalPrice.toLocaleString('vi-VN');
    }

    // Tải giỏ hàng khi trang được tải
    window.onload = loadCart;




    
    function checkout(event) {
        const paymentMethod = document.querySelector('input[name="payment"]:checked').id;
    
        if (paymentMethod === 'chuyen-khoan') {
            // Tạo mã đơn hàng ngẫu nhiên
            const orderId = 'DH' + Math.floor(Math.random() * 100000000);
    
            // Cập nhật mã đơn hàng và hiển thị phần tử
            document.getElementById('order-id').textContent = orderId;
            document.getElementById('order-details').style.display = 'block';
    
            // Ngăn form gửi đi nếu bạn muốn xử lý thông tin thêm
            event.preventDefault();
        } else {
  
    
            // Xóa dữ liệu giỏ hàng
            cart = [];
            totalPrice = 0;
    
            // Xóa dữ liệu giỏ hàng khỏi local storage
            localStorage.removeItem('cart');
            localStorage.removeItem('totalPrice');
    
            // Cập nhật lại hiển thị giỏ hàng
            updateCart();
    
            // Làm trống phần tử chứa giỏ hàng trên giao diện
            const cartItems = document.getElementById('cart-items');
            cartItems.innerHTML = '';
    
            // Cập nhật lại tổng tiền trên giao diện
            document.getElementById('total-price').innerText = '0';
        }
    }
    


    