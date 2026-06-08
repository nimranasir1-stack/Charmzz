// Shopping Cart
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartCount();
    alert(`${productName} added to cart! 💕`);
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Special Request Form
function submitRequest(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const colors = document.getElementById('colors').value;
    const description = document.getElementById('description').value;
    const budget = document.getElementById('budget').value;

    // You can later connect this to an email service or database
    console.log({
        name,
        email,
        colors,
        description,
        budget,
        submittedAt: new Date().toLocaleString()
    });

    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Reset form
    event.target.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});