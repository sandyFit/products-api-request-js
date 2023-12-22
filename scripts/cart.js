let cart;
try {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
} catch (error) {
    console.error('Error parsing cart data:', error);
    cart = [];
}

const cartCountElement = document.querySelector(".count");
const tableBody = document.querySelector("#tbody"); // Assuming tableBody is defined elsewhere

// Function to delete a product from the cart
const deleteProduct = (productId) => {
    // Update cart by filtering out the product with the specified id
    cart = cart.filter((item) => item.id !== productId);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart count in the navigation
    cartCountElement.textContent = cart.length;

    // Refresh the UI by redrawing the table
    renderCart();
};

// Event delegation for handling delete button clicks
tableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteBtn')) {
        const productId = event.target.dataset.productId;
        deleteProduct(productId);
    }
});

// Function to render the cart in the UI
const renderCart = () => {
    tableBody.innerHTML = ""; // Clear the existing content

    // Populate the table with cart items
    cart.forEach((product) => {
        tableBody.innerHTML += `
            <tr key=${product.id}>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.category}</td>
                <td>$${product.price}</td>
                <td>
                    <button class='btn btn-danger w-75 py1 deleteBtn' data-product-id="${product.id}"> X </button>
                </td>
            </tr>
        `;
    });
};

// Initial rendering of the cart
renderCart();
