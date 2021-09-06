var arr = [];
var selectedRow = null

function init(){
    document.getElementById("employeeList").innerHTML = "";
    if (localStorage.records){
        arr = JSON.parse(localStorage.records);
        for (let index = 0; index < arr.length; index++) {
            prepareTableCell(index,arr[index].fullName,arr[index].empCode,arr[index].salary,arr[index].city);
        }
    }
}
function onFormSubmit(){
    selectedIndex = index;
    var fullName = document.getElementById("fullName").value;
    var empCode = document.getElementById("empCode").value;
    var salary = document.getElementById("salary").value;
    var city = document.getElementById("city").value;


    if(selectedIndex === -1 ) {
        arr.push(dataObj)
    }
    else {
        arr.splice(selectedIndex,1,dataObj);
    }


    var dataObj = {index : index , fullName : fullName, empCode : empCode, salary : salary, city : city};
    arr.push(dataObj);
    localStorage.records = JSON.stringify(arr);
    // init();
    
    prepareTableCell(index, fullName,empCode,salary,city);

    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";

}
function prepareTableCell(index,fullName,empCode,salary,city){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    // var fullName = newRow.insertCell(0);
    // var empCode = newRow.insertCell(1);
    // var salary = newRow.insertCell(2);
    // var city = newRow.insertCell(3);
    // var actionCell = newRow.insertCell(4);
 
    // fullName.value = fullName;
    // empCode.value = empCode;
    // salary.innerHTML = salary;
    // city.innerHTML = city;
    // actionCell.innerHTML = `<button onclick="onEdit()">Edit</button><button onclick="onDelete()">Delete</button>`;

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = '<button onclick="onEdit('+ index +')">Edit</button><button onclick="onDelete()">Delete</button>'
    
}
var selectedIndex = -1;
function onEdit(index) {
    selectedIndex = index;
    var dataObj1 = arr[index];
    document.getElementById("fullName").value = dataObj1.fullName;
    document.getElementById("empCode").value = dataObj1.empCode;
    document.getElementById("salary").value = dataObj1.salary;
    document.getElementById("city").value = dataObj1.city;
}


function onDelete(index) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    table.deleteRow(index+1);
    arr.splice(index,1);
    localStorage.records = JSON.stringify(arr);
    init();
}

