const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');
const sound = document.getElementById('ding-sound');

button.addEventListener('click', addItem);

function addItem() {
  const value = input.value;
  if (value !== '') {
    const item = createItem(value);
    list.appendChild(item);
    input.value = '';
  }
}

function createItem(value) {
  const item = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const text = document.createElement('span');
  text.textContent = value;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteItem);
  item.appendChild(checkbox);
  item.appendChild(text);
  item.appendChild(deleteButton);
  checkbox.addEventListener('change', completeItem);
  return item;
}

function completeItem() {
  const item = this.parentNode;
  item.classList.toggle('completed');
  sound.currentTime = 0;
  sound.play();
}

function deleteItem() {
  const item = this.parentNode;
  item.classList.add('deleted');
  setTimeout(function() {
    item.remove();
  }, 500);
}
