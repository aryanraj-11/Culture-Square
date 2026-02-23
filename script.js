const products = [
    { id: 1, name: "Air Max Pro", price: 120, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Ultra Boost", price: 150, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Classic Runner", price: 80, img: "https://via.placeholder.com/200" }
];

const productList = document.getElementById('product-list');
let cartCount = 0;

products.forEach(product => {
    productList.innerHTML += `
        <div class="card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>
    `;
});

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Added to cart!");
}
