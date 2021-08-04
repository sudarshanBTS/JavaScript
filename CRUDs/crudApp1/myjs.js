$(function () {
    var operation = "A"; //"A"=Addition; "E"=Edition
    var selected_index = -1; //Index of the item selected in the list
    var tblData = localStorage.getItem("tblData"); // Retrieve stored data
    tblData = JSON.parse(tblData); // Convert string to object

    if (tblData == null) {
        // If there is no content, we start an empty arrayd
        tblData = [];
    }
    $("#formData").on("submit", function () {
        if (operation == "A") {
            return Add(tblData);
        } else {
            return Edit(tblData, selected_index);
        }
    });
    List(tblData);

    $("#tableList").on("click", ".btnEdit", 
    function () {
        selected_index = parseInt($(this).attr("alt"));
        operation = "E";
        var cli = JSON.parse(tblData[selected_index]);
        $("#id").val(cli.id);
        $("#txtname").val(cli.name);
        $("#txtnumber").val(cli.number);
        $("#txtEmail").val(cli.Email);
        $("#id").attr("readonly", "readonly");
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
        id: $("#id").val(),
        name: $("#txtname").val(),
        number: $("#txtnumber").val(),
        Email: $("#txtEmail").val(),
    });
    tblData.push(emp);
    console.log("tblData - " + tblData);
    localStorage.setItem("tblData", JSON.stringify(tblData));
    alert("Record added.");
    return true;
}
const getData = document.querySelector("#fetchData");
console.log("Hello");

function Edit(tblData, selected_index) {
    tblData[selected_index] = JSON.stringify({
        id: $("#id").val(),
        name: $("#txtname").val(),
        number: $("#txtnumber").val(),
        Email: $("#txtEmail").val(),
    }); //Change the selected item in the table
    console.log(JSON.stringify(tblData));
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
    $("#tableList").html("");
    $("#tableList").html(
        "<thead>" +
        "<tr>" +
        " <th></th>" +
        " <th>id</th>" +
        " <th>name</th>" +
        "<th>number</th>" +
        " <th>Email</th>" +
        " </tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );
    for (var i in tblData) {
        var cli = JSON.parse(tblData[i]);
        $("#tableList tbody").append("<tr>");
        $("#tableList tbody").append(
            "<td><img src='https://img.icons8.com/dotty/12/000000/edit.png' alt='" +
            i +
            "'class='btnEdit'/><img src='https://img.icons8.com/fluent/12/000000/delete-sign.png' alt='" +
            i +
            "' class='btnDelete'/></td>"
        );
        // $("#tableList tbody").append("<td><img src='g' alt='" + "edit" + "'class='btnEdit'/><img src='localStorage/delete. png' alt='" + "delete" + "' class='btnDelete'/></td>");
        $("#tableList tbody").append("<td>" + cli.id + "</td>");
        $("#tableList tbody").append("<td>" + cli.name + "</td>");
        $("#tableList tbody").append("<td>" + cli.number + "</td>");
        $("#tableList tbody").append("<td>" + cli.Email + "</td>");
        $("#tableList tbody").append("</tr>");
    }
}


// const apiEndpoint = "https://localhost:5000/api/users"

const apiEndpoint = "https://reqres.in/api/users=2";

const fetchData = async () => {
    const response = await fetch(apiEndpoint);
    const posts = await response.json();

    return posts
        ;
    // fetch(apiEndpoint).then((response) => {
    //     response.json().then((posts) => console.log(posts));
    // });

}

getData.addEventListener("click", async () => {
    var posts = await fetchData();

    // console.log(posts);
    // console.log(posts.data[0].name);
    if (posts) {
        for (let post in posts.data) {
            
            // console.log(posts.data[0].name);
            console.log(posts.data);
            $("#tableList tbody").append("<tr>");
            $("#tableList tbody").append(
                "<td><img src='https://img.icons8.com/dotty/12/000000/edit.png' alt='" +
                "'class='btnEdit'/><img src='https://img.icons8.com/fluent/12/000000/delete-sign.png' alt='" +
                "' class='btnDelete'/></td>");

                // $("#tableList tbody").append("<td><img src='g' alt='" + "edit" + "'class='btnEdit'/><img src='localStorage/delete. png' alt='" + "delete" + "' class='btnDelete'/></td>");

            $("#tableList tbody").append("<td>" + `${posts.data[post].id}` + "</td>");
            $("#tableList tbody").append("<td>" + `${posts.data[post].name}` + "</td>");
            $("#tableList tbody").append("<td>" + `${posts.data[post].year}`  + "</td>");
            $("#tableList tbody").append("<td>" + `${posts.data[post].color}`  + "</td>");
            $("#tableList tbody").append("</tr>");
            post++;
        }

    }
})