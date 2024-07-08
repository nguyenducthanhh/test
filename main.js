document.addEventListener("DOMContentLoaded", function() {
    // Mô phỏng dữ liệu sản phẩm
    const productsData = [
        { id: 1, name: "Product 1", price: 19.99 },
        { id: 2, name: "Product 2", price: 29.99 },
        { id: 3, name: "Product 3", price: 39.99 },
    ];

    // Hiển thị sản phẩm trên trang
    const productsContainer = document.getElementById("products");
    productsData.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
});

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    // Thực hiện thêm sản phẩm vào giỏ hàng ở đây
    console.log(`Product ${productId} added to cart`);
}
