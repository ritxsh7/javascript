const shoppingList = document.getElementById("shoppingList");
const itemCount = document.getElementById("itemCount");
const addItemForm = document.getElementById("addItemForm");
const itemInput = document.getElementById("itemInput");

function updateItemCount() {
  itemCount.textContent = `Total items: ${shoppingList.children.length}`;
}

function removeItem(button) {
  const li = button.parentElement;
  shoppingList.removeChild(li);
  updateItemCount();
}

addItemForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (itemInput.value !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${itemInput.value} <button onclick="removeItem(this)">Remove</button>`;
    shoppingList.appendChild(li);
    itemInput.value = "";
    updateItemCount();
  }
});

updateItemCount();
