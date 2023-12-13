// detail.js
const apiUrl = "https://dummyjson.com/products";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); // Assuming the ID is passed as a query parameter

axios
	.get(`${apiUrl}/${id}`)
    .then((response) => {
        
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

        const goBackBtn = document.querySelector('.go-back-btn')

        goBackBtn.addEventListener('click', () => {
            // Navigate back to the previous page
            window.history.back();
        })
	})
	
