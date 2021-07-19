var isUpdate = null;

var init = function () {
    var personData = getInput();
    console.log(isUpdate);
    if (isUpdate == null) {
        //insert
        postData(personData);
    }
    else {
        //update
        putData(isUpdate,personData);
        isUpdate = null;
    }
    clear();

    showData();

    window.location.reload();
}

var getInput = function () {

    return {
        name: document.getElementById('name').value,
        lastname: document.getElementById('lastname').value,
        contact: document.getElementById('contact').value,
        email: document.getElementById('email').value,
        id: Date.now()
    }
}

var clear = function () {
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('email').value = '';
}

var postData = function (personData) {
    var personArr = JSON.parse(localStorage.getItem('Person'));

    var arr;
    //var person = new Person(id,input.name,input.lastname,input.contact,input.email);

    if (personArr === null) {
        arr = [];
    }
    else {
        arr = personArr;
    }
    arr.push(personData);

    localStorage.setItem("Person", JSON.stringify(arr));
}

var putData = function (id,data) {
    var personArr, ids, index;

    personArr = JSON.parse(localStorage.getItem('Person'));

    //get IDS of each person object
    ids = personArr.map(function (el) {
        return el.id;
    });

    index = ids.indexOf(parseInt(id));

    personArr[index].name = data.name;
    personArr[index].lastname = data.lastname;
    personArr[index].contact = data.contact;
    personArr[index].email = data.email;

    localStorage.setItem("Person", JSON.stringify(personArr));

}

var showData = function () {
    var html = '', personObject;
    personObject = (JSON.parse(localStorage.getItem('Person')));

    //console.log(personObject);

    if (personObject == null) {
        arr = [];
    }
    else {
        arr = personObject;
    }

    arr.forEach(element => {
        html += `<tr id = ${element.id}>
                <td class = 'list-name'>${element.name}</td>
                <td class = 'list-lastname'>${element.lastname}</td>
                <td class = 'list-contact'>${element.contact}</td>
                <td class = 'list-email'>${element.email}</td>
                <td><button class="edit_btn" onclick = "edit(${element.id})"><i class="fa fa-edit"></i></button></td>
                <td><button class="del_btn" onclick = "del(${element.id})"><i class="fa fa-trash"></i></button></td>
                </tr>`;

        //Insert HTML to DOM
        if (arr.length != 0) {
            document.querySelector('.tbody').innerHTML = html;
        }
    });
}

var del = function (id) {

    console.log(id);
    var personArr, ids, index;

    // get arr from local storage
    personArr = JSON.parse(localStorage.getItem('Person'));

    // get IDS of each person object
    ids = personArr.map(function (el) {
        return el.id;
    });

    index = ids.indexOf(parseInt(id));
    console.log("Index is   " + index);

    if (personArr == null) {
        arr = [];
    }
    else {
        arr = personArr;
    }
    arr.splice(index, 1);

    //console.log(personArr);

    //push the updated arr back into Persons
    localStorage.setItem("Person", JSON.stringify(arr));

    showData();
    //console.log(JSON.parse(localStorage.getItem('Person')));
}

var edit = function (id) {

    var personArr, ids, index;

    personArr = JSON.parse(localStorage.getItem('Person'));

    //get IDS of each person object
    ids = personArr.map(function (el) {
        return el.id;
    });

    index = ids.indexOf(parseInt(id));
    console.log(index);

    if (index !== -1) {

        var obj = {
            name: personArr[index].name,
            lastname: personArr[index].lastname,
            contact: personArr[index].contact,
            email: personArr[index].email
        };

        document.getElementById('name').value = personArr[index].name;
        document.getElementById('lastname').value = personArr[index].lastname;
        document.getElementById('contact').value = personArr[index].contact;
        document.getElementById('email').value = personArr[index].email;
    }

    isUpdate = id;
}

var nameFlag, lastnameFlag, contactFlag, emailFlag;
nameFlag = false;
lastnameFlag = false;
contactFlag = false;
emailFlag = false;

document.getElementById('name').addEventListener('keyup', function(event){
    var value = document.getElementById('name').value;
    var regex = /^[a-zA-Z]{1,20}$/;
    var isValid = regex.test(value);
    console.log(isValid);
    if(isValid)
    {
        document.getElementById('name').classList.add('safe');
        nameFlag = true;
        enableSubmitBtn();
    }
    else{
        document.getElementById('name').classList.add('danger');
        nameFlag = false;
        document.querySelector('.submit').setAttribute('disabled',true);
    }
    
});

document.getElementById('lastname').addEventListener('keyup', function(event){
    var value = document.getElementById('lastname').value;
    var regex = /^[a-zA-Z]{1,20}$/;
    var isValid = regex.test(value);
    console.log(isValid);
    if(isValid)
    {
        document.getElementById('lastname').classList.add('safe');
        lastnameFlag = true;
        enableSubmitBtn();
    }
    else{
        document.getElementById('lastname').classList.add('danger');
        lastnameFlag = false;
        document.querySelector('.submit').setAttribute('disabled',true);
    }
    
});

document.getElementById('contact').addEventListener('keyup', function(event){
    var value = document.getElementById('contact').value;
    var regex = /[0-9]{10}$/;
    var isValid = regex.test(value);
    console.log(isValid);
    if(isValid)
    {
        document.getElementById('contact').classList.add('safe');
        contactFlag = true;
        enableSubmitBtn();
    }
    else{
        document.getElementById('contact').classList.add('danger');
        contactFlag = false;
        document.querySelector('.submit').setAttribute('disabled',true);
    }
});

document.getElementById('email').addEventListener('keyup', function(event){
    var value = document.getElementById('email').value;
    var regex = /[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;
    var isValid = regex.test(value);
    console.log(isValid);
    if(isValid)
    {
        document.getElementById('email').classList.add('safe');
        emailFlag = true;
        enableSubmitBtn();
    }
    else{
        document.getElementById('email').classList.add('danger');
        emailFlag = false;
        document.querySelector('.submit').setAttribute('disabled',true);
    }    
});

var enableSubmitBtn = function()
{
    if(nameFlag == true && lastnameFlag == true && contactFlag == true && emailFlag == true)
    {
        document.querySelector('.submit').removeAttribute('disabled');

        document.getElementById('name').classList.remove('danger');
        document.getElementById('name').classList.remove('safe');
        document.getElementById('lastname').classList.remove('danger');
        document.getElementById('lastname').classList.remove('safe');
        document.getElementById('contact').classList.remove('danger');
        document.getElementById('contact').classList.remove('safe');
        document.getElementById('email').classList.remove('danger');
        document.getElementById('email').classList.remove('safe');
    }    
}

window.onload = showData();