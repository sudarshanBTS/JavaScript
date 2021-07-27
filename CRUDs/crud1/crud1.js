const form = document.querySelector("form");
const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const array = [];
let rowIndex;

const tableHead = (data) => {
  let objectKeys;
  for (let items of data) {
    objectKeys = Object.keys(items);
  }
  let row = document.createElement("tr");
  for (key of objectKeys) {
    let heading = document.createElement("th");
    heading.innerText = key;
    row.appendChild(heading);
  }
  thead.appendChild(row);
  table.appendChild(thead);
};
const tableBody = (data) => {
  for (let items of data) {
    let objectKeys = Object.values(items);
    let row = document.createElement("tr");
    for (let values of objectKeys) {
      let cell = document.createElement("td");
      cell.innerText = values;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  console.log(table);
};

const createItem = () => {
  const id = document.querySelector("#id").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const number = document.querySelector("#number").value;

  formData = {
    id,
    name,
    email,
    number,
  };
  array.push(formData);
  console.log(array);

  try {
    if (localStorage.getItem("productList") === null) {
      localStorage.setItem("productList", JSON.stringify(array));
    } else {
      let storage = JSON.parse(localStorage.getItem("productList"));
      storage.push(formData);
      localStorage.setItem("productList", JSON.stringify(storage));
      console.log(storage);
    }
  } catch (err) {
    console.error(err);
  }
};

const readItem = () => {
  const storage = JSON.parse(localStorage.getItem("productList"));
  if (storage && storage.length >= 1) {
    if (table.rows.length < 1) {
      tableHead(storage);
      tableBody(storage);
    }
  } else {
    return;
  }
  form.reset();
};
function activateItem() {
  rowIndex = this.rowIndex;
  let id = document.querySelector("#id").value;
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#number").value;

  id.value = this.cells[0].innerText;
  name.value = this.cells[1].innerText;
  email.value = this.cells[2].innerText;
  number.value = this.cells[3].innerText;
}

const updateItem = () => {
  const storage = JSON.parse(localStorage.getItem("productList"));
  let id = document.querySelector("#id").value;
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#number").value;

  let tableRowIndex = rowIndex - 1;
  if (tableRowIndex) {
    if (id === "") {
      document.querySelector("#id").focus();
      return;
    }
    if (name === "") {
      document.querySelector("#name").focus();
      return;
    }
    if (email === "") {
      document.querySelector("#email").focus();
      return;
    }
    if (number === "") {
      document.querySelector("#number").focus();
      return;
    }
    let confirm = window.confirm("are sure to update");
    if (confirm === true) {
      tableRowIndex &&
        storage.splice(tableRowIndex, 1, {
          id,
          name,
          email,
          number,
        });
      localStorage.setItem("productList", JSON.stringify(storage));
      console.log(storage);
      window.location.reload();
    } else {
      return;
    }
  } else {
    return;
  }
};
const deleteItem = () => {
  let confirm = window.confirm("are you sure to dlt");
  if (confirm === true) {
    const storage = JSON.parse(localStorage.getItem("productList"));
    let tableRowIndex = rowIndex - 1;
    if (tableRowIndex) {
      tableRowIndex && storage.splice(tableRowIndex, 1);
      localStorage.setItem("productList", JSON.stringify(storage));
      window.location.reload();
      console.log(storage);
    } else {
      return;
    }
  } else {
    return false;
  }
};
  table.onclick = () => {
    let row = table.rows;
    for (let i = 0; i < row.length; i++) {
      row[i].addEventListener("click", activateItem);
    }
  };
