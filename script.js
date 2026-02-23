const products = [
    { 
        id: 1, 
        name: "Air Max Pro", 
        price: 7000, 
        img: "blue-air.jpg", // Real shoe image
        stripeLink: "https://buy.stripe.com/YOUR_LINK_1" 
    },
    { 
        id: 2, 
        name: "Ultra Boost", 
        price: 150, 
        img: "https://images.unsplash.com/photo-1551107643-513682701580", 
        stripeLink: "https://buy.stripe.com/test_dRm3co0cV2Xh6dC2MI6g800" 
    }
];

const productList = document.getElementById('product-list');

// Generate the product cards
products.forEach(product => {
    productList.innerHTML += `
        <div class="card">
            <img src="${product.img}" alt="${product.name}" style="width:100%; border-radius:10px;">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <a href="${product.stripeLink}" target="_blank">
                <button style="background: #6772e5;">Buy Now</button>
            </a>
        </div>
    `;
});
