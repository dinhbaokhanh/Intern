if(localStorage.getItem('currentUser')) {
    document.querySelector('.exit').innerHTML += `
        <a href="/cart/cart.html">
            <i class='fa-solid fa-cart-shopping></i>
        </a>
        <a href="javascript:;" onclick="logout()">
            <i class="fa-solid fa-right-from-bracket"></i>
        </a>    
    `;
} else {
    document.querySelector('.exit').innerHTML += `
        <a href="./login.html">
            <i class="fa-solid fa-right-to-bracket"></i>
        </a>
    `;
}