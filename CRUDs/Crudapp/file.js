const form = document.querySelector("form");
const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const array = [];
let rowIndex;

const tableHead = data => {
  let ObjectKeys;
  for (let items of data) {
    ObjectKeys = Object.keys(items);
  }
  let row = document.createElement("tr");
  for (let key of ObjectKeys) {
    let heading = document.createElement("th");
    heading.innerText = key;
    row.appendChild(heading);
  }
  thead.appendChild(row);
  table.appendChild(thead);
};

const tableBody = data => {
  for (let items of data) {
    let ObjectKeys = Object.values(items);
    let row = document.createElement("tr");
    for (let values of ObjectKeys) {
      let cell = document.createElement("td");
      cell.innerText = values;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  console.log(table);
};

const createEmp = () => {
  const name = document.querySelector("#name").value;
  const id = document.querySelector("#id").value;
  const email = document.querySelector("#email").value; 
  const number = document.querySelector("#number").value;
  if (name === "") {
    alert("Emp name can not be left empty");
    document.querySelector("#name").focus();
    return;
  }
  if (id === "") {
    alert("Emp id can not be left empty");
    document.querySelector("#id").focus();
    return;
  }
  if (email === "") {
    alert("Emp email can not be left empty");
    document.querySelector("#email").focus();
    return;
  }
  if (number === "") {
    alert("Emp number can not be left empty");
    document.querySelector("#number").focus();
    return;
  }
  const formData = {
    name,
    id,
    email,
    number
  };
  array.push(formData);

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
  alert("you have successfully saves the Employee Emp");
  form.reset();
  window.location.reload();

};

const readEmp = () => {
  const storage = JSON.parse(localStorage.getItem("productList"));
  if (storage && storage.length >= 1) {
    if (table.rows.length < 1) {
      tableHead(storage);
      tableBody(storage);
    }
  } else {
    return;
  }
};

table.onclick = () => {
  let row = table.rows;
  for (let i = 0; i < row.length; i++) {
    row[i].addEventListener("click", activateEmp);
  }
};

function activateEmp() {
  rowIndex = this.rowIndex;
  let name = document.querySelector("#name");
  let id = document.querySelector("#id");
  let email = document.querySelector("#email");
  let number = document.querySelector("#number");

  name.value = this.cells[0].innerText;
  id.value = this.cells[1].innerText;
  email.value = this.cells[2].innerText;
  number.value = this.cells[3].innerText;
}

const updateEmp = () => {
  console.log("entered into update0");
  const storage = JSON.parse(localStorage.getItem("productList"));
  const name = document.querySelector("#name").value;
  const id = document.querySelector("#id").value;
  const email = document.querySelector("#email").value;
  const number = document.querySelector("#number").value;
  let tableRowIndex = rowIndex - 1;
  if (tableRowIndex) {
    if (name === "") {
      alert("Emp name can not be left empty");
      document.querySelector("#name").focus();
      return;
    }
    if (id === "") {
      alert("Emp id can not be left empty");
      document.querySelector("#id").focus();
      return;
    }
    if (email === "") {
      alert("Emp email can not be left empty");
      document.querySelector("#email").focus();
      return;
    }
    if (number === "") {
      alert("Emp number can not be left empty");
      document.querySelector("#number").focus();
      return;
    }
    let confirm = window.confirm("Are you sure you want to update this Emp");
    if (confirm === true) {
      tableRowIndex &&
        storage.splice(tableRowIndex, 1, {
          name,
          id,
          email,
          number
        });
      localStorage.setItem("productList", JSON.stringify(storage));
      console.log(storage);
      window.alert("Emp list have been up dated");
      window.location.reload();
    } else {
      return;
    }
  } else {
    return;
  }

};

const deleteEmp = () => {
  let confirm = window.confirm("are you sure you want to delete this Emp");
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


window.onload = function() {
    const storage = JSON.parse(localStorage.getItem("productList"));
    if (storage && storage.length >= 1) {
      if (table.rows.length < 1) {
        tableHead(storage);
        tableBody(storage);
      }
    } else {
      return;
    }

}
// window.onbeforeunload = function () {

//     if (localStorage.getItem("productList") === null) {
//         localStorage.setItem("productList", JSON.stringify(array));
//     } else {
//         let storage = JSON.parse(localStorage.getItem("productList"));
//         storage.push(formData);
//         localStorage.setItem("productList", JSON.stringify(storage));
//         console.log(storage);
//     }
// }
    
    
    var data = {

    }
    const url = "http"
    fetch