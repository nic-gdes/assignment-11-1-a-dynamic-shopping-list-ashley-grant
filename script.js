const list = document.querySelector('#list');
list.innerHTML
const form = document.querySelector('#addToList');
const input = document.querySelector('#itemToAdd');

addToList.addEventListener('submit', function (event){
    event.preventDefault();

    const todoValue = input.value;
    const newListItem = document.createElement('li');

    const newSpan = document.createElement('span');
    newSpan.textContent = todoValue;
    newListItem.appendChild(newSpan);

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', function(event){
        const btn = event.target;
        const parent = btn.parentNode;

        parent.remove();
    })
    newListItem.appendChild(removeButton);
    list.appendChild(newListItem);

    input.value = '';
    input.focus();
})