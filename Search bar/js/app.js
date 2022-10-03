for (let product of products) {
    let card = `
      <div class="card">
          <div class="image-container">
              <img src="${product.image}" /> 
          </div> 
          <div class="container">
              <div class="info">
              <h5 class="name">${product.title}</h5> 
              <h6>${product.price} VNĐ</h6>
              </div>
          </div>
      </div>
      `;
    
        document.getElementById("products").innerHTML += card;
}

