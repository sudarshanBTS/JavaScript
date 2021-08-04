$(function () {
    var operation = "A"; //"A"=Addition; "E"=Edition
    var selected_index = -1; //Index of the item selected in the list
    var tblData = localStorage.getItem("tblData"); // Retrieve stored data
    tblData = JSON.parse(tblData); // Convert string to object

    if (tblData == null) { // If there is no content, we start an empty array
        tblData = [];
    }

    $("#formData").on("submit", function () {
        if (operation == "A") {
            return Add(tblData);
        } else {
            return Edit(tblData, select_index);
        }
    });

    List(tblData);

    $("#tableList").on("click", ".btnEdit", function () {
        operation = "E";
        selected_index = parseInt($(this).attr("alt"));
        var cli = JSON.parse(tblData[selected_index]);
        $("#txtid").val(cli.id);
        $("#txtname").val(cli.name);
        $("#txtnumber").val(cli.number);
        $("#txtEmail").val(cli.Email);
        $("#txtid").attr("readonly", "readonly");
        $("#txtname").focus();
    });

    $("#tableList").on("click", ".btnDelete", function () {
        selected_index = parseInt($(this).attr("alt"));
        Delete(tblData, selected_index);
        List(tblData);
    });
});

function Add(tblData) {

    var emp = JSON.stringify({
        Id: $("#txtid").val(),
        name: $("#txtname").val(),
        number: $("#txtTelephone").val(),
        Email: $("#txtEmail").val()
    });
    tblData.push(emp);
    console.log("tblData - " + tblData);
    localStorage.setItem("tblData", JSON.stringify(tblData));
    alert("Record added.");
    return true;
}

function Edit(tblData, selected_index) {
    tblData[selected_index] = JSON.stringify({
        id: $("#txtid").val(),
        name: $("#txtname").val(),
        number: $("#txtTelephone").val(),
        Email: $("#txtEmail").val()
    });//Change the selected item in the table
    localStorage.setItem("tblData", JSON.stringify(tblData));
    alert("Information edited.")
    operation = "A"; //Back to default
    return true;
}

function Delete(tblData, selected_index) {
    tblData.splice(selected_index, 1);
    localStorage.setItem("tblData", JSON.stringify(tblData));
    alert("Record deleted.");

}

function List(tblData) {
    $("#tableList").html("");
    $("#tableList").html(
        "<thead>" +
        "<tr>" +
        " <th></th>" +
        " <th>Code</th>" +
        " <th>name</th>" +
        " <th>number</th>" +
        " <th>Email</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );
    for (var i in tblData) {
        var cli = JSON.parse(tblData[i]);
        $("#tableList tbody").append("<tr>");
        $("#tableList tbody").append("<td><img src='https://img.icons8.com/dotty/12/000000/edit.png' alt='" + i + "'class='btnEdit'/><img src='https://img.icons8.com/fluent/12/000000/delete-sign.png'/></td>");
        $("#tableList tbody").append("<td>" + cli.Code + "</td>");
        $("#tableList tbody").append("<td>" + cli.name + "</td>");
        $("#tableList tbody").append("<td>" + cli.number + "</td>");
        $("#tableList tbody").append("<td>" + cli.Email + "</td>");
        $("#tableList tbody").append("</tr>");
    }
}