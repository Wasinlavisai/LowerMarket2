const products = [
    { id: 1, name: "100", price: 102, image: "images/coin.png" },
    { id: 2, name: "200", price: 205, image: "images/coin.png" },
    { id: 3, name: "399", price: 410, image: "images/coin.png" },
    { id: 4, name: "699", price: 780, image: "images/coin.png" },
    { id: 5, name: "หมด", price: 250, image: "images/coin.png" },
    { id: 6, name: "หมด", price: 300, image: "images/coin.png" },
    { id: 7, name: "หมด", price: 350, image: "images/coin.png" },
    { id: 8, name: "หมด", price: 320, image: "images/coin.png" },
    { id: 9, name: "หมด", price: 100, image: "images/coin.png" },
    { id: 10, name: "หมด", price: 600, image: "images/coin.png" },
    { id: 11, name: "หมด", price: 550, image: "images/coin.png" },
    { id: 12, name: "หมด", price: 700, image: "images/coin.png" }
];

const productList = document.getElementById('product-list');
products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>ราคา: ${product.price} บาท</p>
        <button onclick="addToCart(${product.id})">เพิ่มลงตะกร้า</button>
    `;
    productList.appendChild(div);
});
