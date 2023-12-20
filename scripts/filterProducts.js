// Change Theme Mode
// Change Theme Mode
const changeTheme = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
};

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", changeTheme);

const apiUrl = "https://dummyjson.com/products";

axios
    .get(apiUrl)
    .then((response) => {
        const products = response.data.products;

        const input = document.querySelector("#inputSearch");
        const select = document.querySelector("#searchFilter");
        const tableBody = document.querySelector("tbody");

        input.addEventListener("input", (e) => {
            const term = e.target.value.toLowerCase();

            const filteredByCategory = products.filter((product) => {
                return (
                    product.category && product.category.toLowerCase().includes(term)
                );
            });

            const filteredByName = products.filter((product) => {
                return product.title && product.title.toLowerCase().includes(term);
            });

            // Combine the results of both filters
            const combinedResults = [...filteredByCategory, ...filteredByName];

            // Remove duplicates from the combined results
            const uniqueResults = Array.from(
                new Set(combinedResults.map((product) => product.id))
            ).map((id) => combinedResults.find((product) => product.id === id));

            // Clear existing table content
            tableBody.innerHTML = "";

            // Populate the table with filtered products
            uniqueResults.forEach((product) => {
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

        select.addEventListener("change", (e) => {
            const filterType = e.target.value;

            const filteredByPrice = products.filter((product) => {
                return 
            })

            // Add logic to handle different filter types (e.g., "price", "best-rated")
            // You can modify this based on your specific requirements
            
            // Clear existing table content
            tableBody.innerHTML = "";

            // Populate the table with products based on the selected filter type
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
