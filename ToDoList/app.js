document.querySelector('#addButton').onclick = function() {
    if(document.querySelector('#addTask input').value.length == 0) {
        alert("Are you be LAZY ????? ENTER A TASK");
} else {
    document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#addTask input').value}
            </span>
            <a class="delete"> Delete </a>
        </div>
    `;

    var current_tasks = document.querySelectorAll('.delete');
    for (let i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        };
        
    }

    }
}

var list = document.querySelector('#tasks');
list.addEventListener('click', function(event) {
    console.log('clicked');
    console.log(event.target.tagName);
    if (event.target.tagName === 'SPAN') {
        event.target.classList.toggle('done');
    }
});