// cart.js
let cart;
try {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
} catch (error) {
    // Handle the error, e.g., reset the cart to an empty array
    console.error('Error parsing cart data:', error);
    cart = [];
}

const cartCount = cart.length;

const tableBody = document.querySelector("#tbody"); // Assuming tableBody is defined elsewhere

// Populate the table with cart items
cart.forEach((product) => {
  tableBody.innerHTML += `
    <tr key=${product.id}>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.description}</td>
      <td>${product.category}</td>
      <td>$${product.price}</td>
    </tr>
  `;
});

// Update cart count in navigation
const cartCountElement = document.querySelector(".count");
cartCountElement.textContent = cartCount;
