const cartDisplay = document.getElementById('cart-items');
let cart = JSON.parse(localStorage.getItem('shoeCart')) || [];

if (cart.length === 0) {
    cartDisplay.innerHTML = "<p>Your database is empty.</p>";
} else {
    cart.forEach((item, index) => {
        cartDisplay.innerHTML += `
            <div class="card" style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <span>${item.name}</span>
                <span>$${item.price}</span>
            </div>
        `;
    });
}

function clearCart() {
    localStorage.removeItem('shoeCart');
    location.reload(); // Refresh page to show empty cart
}
