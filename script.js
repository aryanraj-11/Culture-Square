const shoes = [
    { id: 1, name: "Air Max Pro", price: 7999, img: "blue-air.jpg" },
    { id: 2, name: "Onitsuka Tiger", price: 5499, img: "onitsuka-tiger.jpg" },
    { id: 3, name: "Neon Street", price: 6200, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" }
];

let cart = JSON.parse(localStorage.getItem('cultureCart')) || [];

function updateUI() {
    const count = document.getElementById('cart-count');
    if(count) count.innerText = cart.length;
}

// Display Products on Home Page
if(document.getElementById('product-list')) {
    document.getElementById('product-list').innerHTML = shoes.map(s => `
        <div class="card" style="background:#1f1f1f; padding:20px; border-radius:10px; text-align:center;">
            <img src="${s.img}" style="width:100%; border-radius:8px;">
            <h3>${s.name}</h3>
            <p style="color:#00ffcc;">₹${s.price}</p>
            <button class="btn" onclick="addToCart(${s.id})">Add to Cart</button>
        </div>
    `).join('');
}

window.addToCart = (id) => {
    const item = shoes.find(s => s.id === id);
    cart.push(item);
    localStorage.setItem('cultureCart', JSON.stringify(cart));
    updateUI();
    alert(item.name + " added to cart!");
};

updateUI();
