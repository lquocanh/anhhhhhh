// contact.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn gửi form mặc định

        // Lấy dữ liệu từ form
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        // Hiển thị thông báo
        alert(`Cảm ơn ${name}! Thông tin của bạn đả được gửi đi.\n\nEmail: ${email}\nNội dung: ${message}`);

        // Xóa dữ liệu trong form sau khi gửi
        form.reset();
    });
});
