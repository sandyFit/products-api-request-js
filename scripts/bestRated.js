document.addEventListener("DOMContentLoaded", function () {

    const apiUrl = "https://dummyjson.com/products";

    axios
        .get(apiUrl)
        .then((response) => {
            const products = response.data.products;

            // Ordenar los productos por rating de forma descendente
            const topRatedProducts = products
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 5);
            
            const container = document.querySelector(".home-container");

            topRatedProducts.forEach(product => {
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
            alert(`Error fetching data ${err.message}`);    
        });

});
