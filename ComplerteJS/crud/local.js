window.onload = function () {
  //ensures the page is loaded before functions are executed.
  document.getElementById("carForm").onsubmit = store;
  document.getElementById("clearButton").onclick = clearStorage;
  document.getElementById("removeButton").onclick = removeItem;
  document.getElementById("retrieveButton").onclick = retrieveRecords;
  document.getElementById("editButton").onclick = editButton;
};
function store() {
  var brand = document.getElementById("carBrand").value;
  var price = document.getElementById("carPrice").value;
  var key = document.getElementById("key").value;

  const car = {
    brand: brand,
    price: price,
  };

  window.localStorage.setItem(key, JSON.stringify(car));
}

function retrieveRecords() {
  var key = document.getElementById("retrieveKey").value; //gets key from user
  console.log("retrive records");
  var records = localStorage.getItem(key); //searches for the key in localStorage
  var parsed = JSON.parse(records);
  var arr = new Array();
  arr.push(parsed);

  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow();

  // for (var i = 0; i < arr.length; i++){
  //     var cell = newRow.insertCell();
  //     cell.innerHTML = arr[i];
  //     console.log(arr);
  // }
  for (let index = 0; index < arr.length; index++) {
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = arr[index].brand;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = arr[index].price;
  }
}
function removeItem() {
  //deletes item from localStorage
  var key = document.getElementById("removeKey").value; //gets key from user
  localStorage.removeItem(key); //passes key to the removeItem method
  console.log("remove items");
}

function clearStorage() {
  //clears the entire localStorage
  localStorage.clear();
  console.log("clear records");
}

// function editButton(td) {
// }
function editButton(td) {
  var key = document.getElementById("retrieveKey").value; //gets key from user
  console.log("retrive records");
  var records = localStorage.getItem(key); //searches for the key in localStorage
  var parsed = JSON.parse(records);

  selectedRow = td.parentElement.parentElement;
  document.getElementById("carBrand").value = selectedRow.cells[0].innerHTML;
  document.getElementById("carPrice").value = selectedRow.cells[1].innerHTML;
}
