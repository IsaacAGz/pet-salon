function Product(name, price, category){
    this.name = name;
    this.price = price;
    this.category = category;
}

function registerProduct(event) {
    event.preventDefault();

    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let category = document.getElementById("productCategory").value;

    let product = new Product(name, price, category);

    let container = document.getElementById("productsList");
    container.innerHTML += 
    `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
            <p class="card-text">${product.category}</p>
        </div>
    </div>
    `;
}