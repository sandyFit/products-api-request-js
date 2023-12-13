const apiUrl = "https://dummyjson.com/products";

axios
	.get(apiUrl)
	.then((response) => {
		const products = response.data.products;

		const input = document.querySelector("#searchInput");
		const tableBody = document.querySelector("tbody");

		input.addEventListener("input", (e) => {
			const term = e.target.value.toLowerCase();

			const filtered = products.filter((product) => {
				return product.category.toLowerCase().includes(term);
			});

        // Clear existing table content
        tableBody.innerHTML = "";

        // Populate the table with filtered products
        filtered.forEach((product) => {
            tableBody.innerHTML += `
                <tr key=${product.id}>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.description}</td>
                    <td>${product.category}</td>
                    <td>$${product.price}</td>
                </tr>
            `;
			});
		});

		// Populate the initial table with all products
		products.forEach((product) => {
			tableBody.innerHTML += `
                <tr key=${product.id}>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.description}</td>
                    <td>${product.category}</td>
                    <td>$${product.price}</td>
                </tr>
            `;
		});
	})
	.catch((err) => {
		alert(`Error fetching data ${err.message}`);
	});