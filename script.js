const products = [
    { 
        id: 1, 
        name: "Air Max Pro", 
        price: 7000, 
        img: "blue-air.jpg", // Real shoe image 
    },
    { 
        id: 2, 
        name: "Ultra Boost", 
        price: 150, 
        img: "https://plus.unsplash.com/premium_photo-1670983858132-c2f3c4dbf08c?w=600&auto=format&fit=crop&q=
            60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHNob2VzfGVufDB8fDB8fHww", 
    
    },
     { 
        id: 3, 
        name: "Air Pro", 
        price: 7000, 
        img: "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?w=600&auto=format&fit=crop&q=60&ixlib=rb
            -4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNob2VzfGVufDB8fDB8fHww", // Real shoe image
    },
    { 
        id: 4, 
        name: "Woodland", 
        price: 7000, 
        img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop&q=60&ixlib=rb
            -4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHNob2VzfGVufDB8fDB8fHww", // Real shoe image
        
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
// Function to add item to our 'Fake Database' (localStorage)
function addToCart(name, price) {
    // 1. Get existing cart data or create empty array
    let cart = JSON.parse(localStorage.getItem('shoeCart')) || [];

    // 2. Add new product to the array
    cart.push({ name: name, price: price });

    // 3. Save back to localStorage
    localStorage.setItem('shoeCart', JSON.stringify(cart));

    alert(name + " added to your database!");
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('shoeCart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
}
