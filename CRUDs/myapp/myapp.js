$(function () {
  var operation = "A"; //"A"=Addition; "E"=Edition
  var selected_index = -1; //Index of the item selected in the list
  var tblData = localStorage.getItem("tblData"); // Retrieve stored data
  tblData = JSON.parse(tblData); // Convert string to object
    console.log(tblData);
  if (tblData == null) {
    // If there is no content, we start an empty array
    tblData = [];
  }


  
  $("#frmRegistration").on("submit", function () 
  { debugger;
    if (operation == "A") {
      return Add(tblData);
    } else {
      return Edit(tblData, selected_index);
    }
  });

  List(tblData);

  $("#tblList").on("click", ".btnEdit", function () {
    operation = "E";
    selected_index = parseInt($(this).attr("alt"));
    var cli = JSON.parse(tblData[selected_index]);
    $("#txtId").val(cli.Id);
    $("#txtName").val(cli.Name);
    $("#txtPhone").val(cli.Phone);
    $("#txtEmail").val(cli.Email);
    $("#txtId").attr("readonly", "readonly");
    $("#txtName").focus();
  });

  $("#tblList").on("click", ".btnDelete", function () {
    selected_index = parseInt($(this).attr("alt"));
    Delete(tblData, selected_index);
    List(tblData);
  });
});

function Add(tblData) {
  var emp = JSON.stringify({
    Id: $("#txtId").val(),
    Name: $("#txtName").val(),
    Phone: $("#txtPhone").val(),
    Email: $("#txtEmail").val(),
  });
  tblData.push(emp);
  console.log("tblData - " + tblData);
  localStorage.setItem("tblData", JSON.stringify(tblData));
  alert("Record added.");
  return true;
}

function Edit(tblData, selected_index) {
  tblData[selected_index] = JSON.stringify({
    Id: $("#txtId").val(),
    Name: $("#txtName").val(),
    Phone: $("#txtPhone").val(),
    Email: $("#txtEmail").val(),
  }); //Change the selected item in the table
  localStorage.setItem("tblData", JSON.stringify(tblData));
  alert("Information edited.");
  operation = "A"; //Back to default
  return true;
}

function Delete(tblData, selected_index) {
  tblData.splice(selected_index, 1);
  localStorage.setItem("tblData", JSON.stringify(tblData));
  alert("Record deleted.");
}

function List(tblData) {
  $("#tblList").html("");
  $("#tblList").html(
    "<thead>" +
      "<tr>" +
      " <th></th>" +
      " <th>Code</th>" +
      " <th>Name</th>" +
      " <th>Phone</th>" +
      " <th>Email</th>" +
      "</tr>" +
      "</thead>" +
      "<tbody>" +
      "</tbody>"
  );
  for (var i in tblData) {
    var cli = JSON.parse(tblData[i]);
    $("#tblList tbody").append("<tr>");
    $("#tblList tbody").append(
      "<td><img src='' alt='" +
        i +
        "'class='btnEdit'/><img src='' alt='" +
        i +
        "' class='btnDelete'/></td>"
    );
    $("#tblList tbody").append("<td>" + cli.Id + "</td>");
    $("#tblList tbody").append("<td>" + cli.Name + "</td>");
    $("#tblList tbody").append("<td>" + cli.Phone + "</td>");
    $("#tblList tbody").append("<td>" + cli.Email + "</td>");
    $("#tblList tbody").append("</tr>");
  }
}
