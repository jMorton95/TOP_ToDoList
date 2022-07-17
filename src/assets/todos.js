const todos = function(){
    const nums = [1, 2, 3, 4];
    const allTodos = function() {
        for (let x = 0; x < nums.length; x++){
            let el = document.createElement('div');
            el.classList.add('todoItem');
            el.classList.textContent = "Item";
        }
        return document.querySelectorAll('.todoItem');
    };

return allTodos;
}

export default todos;