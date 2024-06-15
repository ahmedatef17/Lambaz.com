// Function to load product data (demo purposes)
function loadProducts() {
    const products = [
        {
            id: 1,
            name: "Decorative LED",
            price: "EGP 100",
            image: "images/product1.jpg"
        },
        {
            id: 2,
            name: "Circuit Breaker",
            price: "EGP 200",
            image: "images/product2.jpg"
        },
        {
            id: 3,
            name: "Power Cable",
            price: "EGP 50",
            image: "images/product3.jpg"
        }
    ];
    return products;
}

// Function to display products
function displayProducts() {
    const products = loadProducts();
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);
