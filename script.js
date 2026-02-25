const shoes = [
    { id: 1, name: "Air Max Pro", price: 7999, img: "blue-air.jpg" },
    { id: 2, name: "Onitsuka Tiger", price: 5499, img: "onitsuka-tiger.jpg" },
    { id: 3, name: "Neon Street", price: 6200, img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400" }
];

let cart = JSON.parse(localStorage.getItem('cultureCart')) || [];

// 1. Update Cart Count Everywhere
function updateUI() {
    const count = document.getElementById('cart-count');
    if(count) count.innerText = cart.length;
}

// 2. Display Shop Items
if(document.getElementById('product-list')) {
    document.getElementById('product-list').innerHTML = shoes.map(s => `
        <div class="card">
            <img src="${s.img}">
            <h3>${s.name}</h3>
            <p>₹${s.price}</p>
            <button class="btn" onclick="addToCart(${s.id})">Add to Cart</button>
        </div>
    `).join('');
}

// 3. Add to Cart function
window.addToCart = (id) => {
    const item = shoes.find(s => s.id === id);
    cart.push(item);
    localStorage.setItem('cultureCart', JSON.stringify(cart));
    updateUI();
    alert("Added to cart!");
};

// 4. Display Cart Items
if(document.getElementById('cart-items')) {
    const cartDiv = document.getElementById('cart-items');
    if(cart.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartDiv.innerHTML = cart.map((item, index) => `
            <div class="card">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <button onclick="removeItem(${index})" style="background:red; color:white; border:none; padding:5px; border-radius:3px; cursor:pointer;">Remove</button>
            </div>
        `).join('');
        
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('total-price').innerText = "Total: ₹" + total;
    }
}

window.removeItem = (index) => {
    cart.splice(index, 1);
    localStorage.setItem('cultureCart', JSON.stringify(cart));
    location.reload();
};

window.placeOrder = () => {
    const name = document.getElementById('cust-name').value;
    if(name && cart.length > 0) {
        alert(`Thank you ${name}! Your order for "Culture Square" has been placed.`);
        localStorage.removeItem('cultureCart');
        window.location.href = "index.html";
    } else {
        alert("Please fill details and add items to cart.");
    }
};

updateUI();
