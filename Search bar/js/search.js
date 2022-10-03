function SearchEngine() {
    // Lấy giá trị input
    var input, filter, card, name, i, txtValue;
    input = document.getElementById('search-input')
    filter = input.value.toLowerCase();
    card = document.getElementsByClassName('card');

    // Ẩn div ko có trong search
    for (i = 0; i < card.length; i++) {
        name = card[i].getElementsByClassName('name')[0];
        txtValue = name.innerText; // or name.innerHTNL
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }

}