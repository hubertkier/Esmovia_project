function add_item() {
    taskNew = new Task();
}

function Task() {
    
    var task = document.getElementById('todo_input').value;
    
    
    var listItem = document.createElement("li");
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    
    var itemText = document.createTextNode(task);
    listItem.appendChild(itemText);
    
    var delete_task = document.createElement("button");
    delete_task.name = "delete";
    delete_task.innerHTML = "Delete"; 
    listItem.appendChild(delete_task);
    
    document.getElementById('todo_list').appendChild(listItem);
    
    delete_task.addEventListener('click', function() {
        listItem.remove();
    });
    
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    });
    
    document.getElementById('todo_input').value = "";
}


