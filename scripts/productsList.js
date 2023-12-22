// import axios from "axios";

/*
Using AJAX, do a GET request to your own Github repositories endpoint. 
The URL will be https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos.

Once you get the data, use .reduce() to figure out how many watchers you have across all of your 
repositories. Don't be too disappointed if the number is 0. You're still new at this :)


Process:
1. install axios
*/

// productList.js

// Declare viewMore function globally
function viewMore(productId) {
    // Check if cart exists in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Redirect to detail.html with the ID as a query parameter
    window.location.href = `detail.html?id=${productId}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://dummyjson.com/products";

    axios
        .get(apiUrl)
        .then((response) => {
            const products = response.data.products;
            const totalProducts = products.length;
            console.log(products);
            console.log(typeof products); // returns an object
            console.log(`Total Products: ${totalProducts}`);

            // Select the container
            const container = document.querySelector(".home-container");

            // Loop through products and append them to the container
            products.forEach(product => {
                container.innerHTML += ` 
                <div class="container-box">			
                    <div class="card">
                        <h3>Product N° ${product.id}</h3>
                        <h3>${product.title}</h3>
                        <p>Brand: ${product.brand}</p>
                        <img src="${product.images[0]}" alt="pic" />
                        <p>Price: $${product.price}</p>
                        <button class="btn" onclick="viewMore(${product.id})">View More</button>
                    </div>
                </div>`;
            })

        })
        .catch((err) => {
            console.error(`Error fetching data ${err.message}`);
        });

    const changeTheme = () => {
        const body = document.querySelector('body');
        body.classList.toggle('dark');
    }

    const themeBtn = document.querySelector("#theme-btn");

	themeBtn.addEventListener('click', changeTheme);
	
	// Update cart count in navigation
	const cartCountElement = document.querySelector(".count");
	cartCountElement.textContent = cart.length;
});
