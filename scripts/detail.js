// detail.js
document.addEventListener("DOMContentLoaded", function () {
	const goBackBtn = document.querySelector(".go-back-btn");

	goBackBtn.addEventListener("click", () => {
		// Navigate back to the previous page
		window.history.back();
    });
    

    // Change Theme
	const changeTheme = () => {
		const body = document.querySelector("body");
		body.classList.toggle("dark");
	};

	const themeBtn = document.querySelector("#theme-btn");
	themeBtn.addEventListener("click", changeTheme);

	const cart = [];


	const apiUrl = "https://dummyjson.com/products";
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id"); // Assuming the ID is passed as a query parameter

	axios.get(`${apiUrl}/${id}`).then((response) => {
		const container = document.querySelector(".detail-container");

		// Updating title and card
		container.innerHTML += ` 
			<h1> Product N° ${response.data.id} </h1>
			<div class="detail-container-box">
				<div class="detail-card">                                       
					<img src="${response.data.images[0]}" alt="${response.data.title} image" />               
					<p>Price: $${response.data.price}</p>
				</div>

				<div class="description">
					<h3>${response.data.title}</h3>
					<p>Brand: ${response.data.brand}</p>
					<p>${response.data.description}</p>
				</div>
			</div>
		`;

		// Add to Cart button click event
		const addToCartBtn = document.querySelector("#add-to-cart-btn");
		addToCartBtn.addEventListener("click", () => addToCart(id));
		
		// Add to Cart Fn
		const addToCart = (productId) => {
			const product = cart.find((item) => item.id === productId);

			if (product) {
				// Product already in the cart, you can update quantity or show a message
				alert('Product is already in the cart');
			} else {
				// Add the product to the cart
				cart.push({
					id: productId,
					name: response.data.title,
					description: response.data.description,
					category: response.data.category,
					price: response.data.price
				});

				// Save the updated cart to localStorage
				localStorage.setItem('cart', JSON.stringify(cart));

				// Update the cart count in the navigation
				const cartCountElement = document.querySelector(".count");
				cartCountElement.textContent = cart.length;
			}
		};


		
	});
});
