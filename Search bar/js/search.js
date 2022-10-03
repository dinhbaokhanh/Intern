function SearchEngine() {
    // Lấy giá trị
    var input, filter, card, name, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toLowerCase();
    items = document.getElementsByClassName('items');
  
    // Ẩn div ko có trong search
    for (i = 0; i < card.length; i++) {
        name = card[i].getElementsByClassName('name')[0];
        txtValue = name.textContent || name.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}