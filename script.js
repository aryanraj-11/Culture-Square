// GSAP Register
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Image Animation (Zoom on Scroll)
gsap.to(".hero-img", {
    scale: 2,
    duration: 3,
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true, // Scroll ke saath animate hoga
        pin: true    // Screen ruk jayegi jab tak animation khatam na ho
    }
});

// 2. Products Data
const shoes = [
    { name: "Air Max Pulse", price: "₹12,995", img: "blue-air.jpg" },
    { name: "Onitsuka Tiger", price: "₹8,500", img: "onitsuka-tiger-yellow.jpg" },
    { name: "Classic Street", price: "₹6,200", img: "banner.png" }
];

// 3. Displaying Products
const list = document.getElementById('product-list');
if(list) {
    list.innerHTML = shoes.map(s => `
        <div class="card">
            <img src="${s.img}" style="width:100%">
            <h3>${s.name}</h3>
            <p>${s.price}</p>
            <button class="btn">Add to Cart</button>
        </div>
    `).join('');
}
