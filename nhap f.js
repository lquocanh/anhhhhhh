let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const track = document.querySelector('.carousel-track');
const totalImages = images.length;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

function updateCarousel() {
    const translateX = -currentIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;
}

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

// Tự động chuyển ảnh mỗi 3 giây
setInterval(showNextImage, 3000);



var cart = [];
var totalPrice = 0;

function addToCart(productName, price) {
    var quantity = 1; // Default quantity is 1
    var itemTotal = price * quantity;

    // Check if product already in cart
    var existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += quantity;
        existingProduct.itemTotal += itemTotal;
    } else {
        cart.push({ name: productName, price: price, quantity: quantity, itemTotal: itemTotal });
    }

    totalPrice += itemTotal;
    updateCart();
    showCart();
}

function updateCart() {
    var cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items

    cart.forEach(function(item, index) {
        var cartItem = document.createElement('tr');
        cartItem.innerHTML = `
            <td>${item.name}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>${item.price.toLocaleString('vi-VN')}</td>
            <td>${item.itemTotal.toLocaleString('vi-VN')}</td>
        `;
        cartItems.appendChild(cartItem);
    });

    document.getElementById('total-price').innerText = totalPrice.toLocaleString('vi-VN');
}

function updateQuantity(index, newQuantity) {
    var item = cart[index];
    var oldTotal = item.itemTotal;

    item.quantity = parseInt(newQuantity);
    item.itemTotal = item.price * item.quantity;

    totalPrice += (item.itemTotal - oldTotal);
    updateCart();
}

function showCart() {
    document.getElementById('cart-modal').style.display = 'block';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function checkout() {
    // Lưu giỏ hàng vào Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice);

    // Chuyển đến trang thanh toán
    window.location.href = 'giỏ hàng.html';
}